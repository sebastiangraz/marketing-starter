import { isBrowser } from "../lib/helpers";
import { motion } from "framer-motion";
import Menu from "../components/menu";
import Link from "next/link";
import PromoBar from "../components/promo-bar";
import Icon from "./icon";
import { transparentize } from "@theme-ui/color";
import { useState } from "react";
import { Text, Flex } from "theme-ui";
import { useResponsiveValue } from "@theme-ui/match-media";

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
      button: {
        variant: "styles.buttonReset",
      },
    },
  };

  return (
    <>
      <PromoBar data={promo} />
      <header sx={style.navStyle}>
        <div sx={style.navWrapper}>
          <div className="logo">
            <span
              sx={{
                display: "flex",

                willChange: "transform",
              }}
            >
              {useResponsiveValue([
                <Flex
                  key={"1"}
                  sx={{ width: "100%", justifyContent: "space-between " }}
                >
                  <Icon
                    sx={{ width: "4rem" }}
                    color={"currentColor"}
                    viewBox="0 0 82 20"
                    name="Logo"
                  />
                  <Text
                    sx={{ cursor: "pointer" }}
                    onClick={() => toggleMobileNav(!isMobileNavOpen)}
                  >
                    <Icon
                      sx={{ width: "1rem", pr: "0.25rem" }}
                      color={"currentColor"}
                      name="Plus"
                    />
                    Menu
                  </Text>
                </Flex>,
                <Link key={"2"} href="/" scroll={false} passHref>
                  <Text variant="text.navlink">
                    <Icon
                      sx={{ width: "4rem" }}
                      color={"currentColor"}
                      viewBox="0 0 82 20"
                      name="Logo"
                    />
                  </Text>
                </Link>,
              ])}
            </span>
          </div>

          {menuMobilePrimary?.items && (
            <Menu className="menu" items={menuMobilePrimary.items} />
          )}

          {menuMobileSecondary?.items && (
            <Menu className="submenu" items={menuMobileSecondary.items} />
          )}
        </div>
      </header>
      <div
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          pointerEvents: ["none"],
          background: ["rgba(0,0,0,0.1)", "transparent"],
          opacity: 0,
          zIndex: 9,
          ...(isMobileNavOpen && {
            pointerEvents: ["auto", "none"],
            opacity: 1,
          }),
        }}
        className="mobileBackDrop"
        onClick={() => toggleMobileNav(false)}
      ></div>

      <span className="header--observer" />
    </>
  );
};

export default Header;
