import { isBrowser } from "../lib/helpers";
import Menu from "../components/menu";
import Link from "next/link";
import PromoBar from "../components/promo-bar";
import Icon from "./icon";
import { useState } from "react";
import { Button, Text } from "theme-ui";

const rotate = {
  show: {
    rotate: 0,
    transition: {
      duration: 1,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    rotate: 360,
    transition: {
      // repeat: Infinity,
      duration: 1,
      ease: "linear",
      when: "afterChildren",
    },
  },
};

const Header = ({ data = {} }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const { promo, menuMobilePrimary, menuMobileSecondary } = data;

  const toggleMobileNav = (state) => {
    setMobileNavOpen(state);
    if (isBrowser) {
      document.body.classList.toggle("overflow-hidden", state);
    }
  };

  const style = {
    navStyle: {
      fontSize: 2,
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "background",
      mb: "3rem",
    },
    navWrapper: {
      variant: "layout.row",
      px: "0.5rem",
      display: "grid",
      gridTemplateColumns: ["1fr", "auto auto auto", "1fr 1fr 1fr"],
      gridTemplateRows: ["auto"],
      rowGap: "3rem",
      alignItems: "flex-start",
      pt: "1.5rem",
      pb: ["1.5rem", "3rem"],
      ...(isMobileNavOpen && {
        gridTemplateRows: ["auto auto auto", "1fr"],
        pb: "3rem",
      }),
      li: {
        whiteSpace: "pre",
        "&.is-active": {
          color: "primary",
        },
        "&:not(.is-active)": {
          color: "text",
        },
      },
      ".logo": {
        gridArea: "1/1",
        alignItems: "center",
        alignSelf: ["center"],
      },
      ".menu, .submenu": {
        padding: "0px",
        margin: 0,
        position: "relative",
        rowGap: "1rem",
        display: ["none", "inline-flex"],
        flexDirection: ["column", "row"],
        listStyle: "none",
        "> * ": {
          pr: 5,
        },
        "> *:last-child": {
          pr: 0,
        },
        ...(isMobileNavOpen && {
          display: "inline-flex",
        }),
      },
      ".menu": {
        width: "100%",
        justifyContent: ["flex-start", "center"],
        alignItems: ["flex-start", "center"],
        alignSelf: ["flex-start", "center"],
        gridArea: ["2/1", "1/2"],
      },
      ".submenu": {
        width: "100%",
        justifyContent: ["flex-start", "flex-end"],
        alignItems: ["flex-start", "center"],
        alignSelf: ["flex-start", "center"],
        gridArea: ["3/1", "1/3"],
      },
    },
  };

  return (
    <>
      <PromoBar data={promo} />
      <header sx={style.navStyle}>
        <div sx={style.navWrapper}>
          <div className="logo">
            <Link href="/" scroll={false} passHref>
              <a
                sx={{
                  p: "0.25rem",
                  variant: "text.navlink",
                  textDecoration: "none",
                  color: "inherit",
                  display: "inline-flex",
                }}
              >
                <Icon
                  sx={{ width: "4rem" }}
                  color={"currentColor"}
                  viewBox="0 0 82 20"
                  name="Logo"
                />
              </a>
            </Link>
          </div>

          <ul sx={{ gridArea: "1/3", display: ["flex", "none"] }}>
            <Button
              variant="text.navlink"
              sx={{ all: "unset", cursor: "pointer" }}
              onClick={() => toggleMobileNav(!isMobileNavOpen)}
            >
              <Icon
                sx={{ width: "1rem", pr: "0.25rem" }}
                color={"currentColor"}
                name="Plus"
              />
              Menu
            </Button>
          </ul>

          {menuMobilePrimary?.items && (
            <Menu className="menu" items={menuMobilePrimary.items} />
          )}

          {menuMobileSecondary?.items && (
            <Menu className="submenu" items={menuMobileSecondary.items} />
          )}
        </div>
      </header>
      <button
        tabIndex={0}
        sx={{
          all: "unset",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          pointerEvents: ["none"],
          transition: "background 0.4s ease",
          background: ["rgba(0,0,0,0.1)", "transparent"],
          opacity: 0,
          zIndex: 9,
          ...(isMobileNavOpen && {
            pointerEvents: ["auto", "none"],
            opacity: 1,
          }),
          "&:focus-visible": {
            background: ["rgba(0,0,0,0.3)", "transparent"],
          },
        }}
        className="mobileBackDrop"
        onClick={() => toggleMobileNav(false)}
      ></button>

      <span className="header--observer" />
    </>
  );
};

export default Header;
