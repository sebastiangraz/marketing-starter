import React, { useState } from "react";
import { useRouter } from "next/router";
import { isBrowser } from "../lib/helpers";
import { motion } from "framer-motion";
import Menu from "../components/menu";
import Link from "next/link";

const rotate = {
  show: {
    origin: "center",
    rotate: 0,
    transition: {
      duration: 1,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    origin: "center",
    rotate: 360,
    transition: {
      // repeat: Infinity,
      duration: 1,
      ease: "linear",
      when: "afterChildren",
    },
  },
};

const style = {
  navStyle: {
    fontSize: 2,
    borderBottom: "1px solid",
  },
  navWrapper: {
    variant: "layout.row",
    display: "grid",
    gridTemplateColumns: `1fr 1fr 1fr`,
    alignItems: "start",
    py: 3,
    height: 10,
    li: {
      "&.is-active": {
        color: "primary",
      },
      "&:not(.is-active)": {
        color: "initial",
      },
    },
    ".logo": {
      gridArea: "1/1",
    },
    ".menu": {
      justifySelf: "center",
      gridArea: "1/2",
    },
    ".submenu": {
      justifySelf: "flex-end",
      gridArea: "1/3",
    },
    "a, button": {
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": { opacity: 0.6 },
    },
    button: {
      appearance: "none",
      letterSpacing: "inherit",
      border: 0,
      fontFamily: "inherit",
      background: "none",
      color: "inherit",
      fontSize: "inherit",
    },
  },
};

const Header = ({ data = {} }) => {
  // expand our header data
  const { menuMobilePrimary, menuMobileSecondary } = data;

  // setup states
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter();

  // setup menu toggle event
  const toggleMobileNav = (state) => {
    setMobileNavOpen(state);

    if (isBrowser) {
      document.body.classList.toggle("overflow-hidden", state);
    }
  };

  return (
    <>
      <header sx={style.navStyle}>
        <div sx={style.navWrapper}>
          <div className="logo">
            <motion.span
              sx={{
                display: "inline-block",
                willChange: "transform",
              }}
              initial="show"
              exit="hide"
              animate="show"
              variants={rotate}
            >
              <Link href="/" scroll={false}>
                Logo
              </Link>
            </motion.span>
          </div>

          {menuMobilePrimary?.items && (
            <Menu
              className="menu"
              items={menuMobilePrimary.items}
              onClick={() => toggleMobileNav(false)}
            />
          )}
          {menuMobilePrimary?.items && (
            <Menu
              className="submenu"
              items={menuMobileSecondary.items}
              onClick={() => toggleMobileNav(false)}
            />
          )}
        </div>
      </header>

      <span className="header--observer" />
    </>
  );
};

export default Header;
