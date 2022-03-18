import React, { useState } from "react";
import { useRouter } from "next/router";
import { isBrowser } from "../lib/helpers";
import { motion } from "framer-motion";
import Menu from "../components/menu";
import Link from "next/link";

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
    height: 11,
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
      alignItems: "center",
    },
    ".menu": {
      justifySelf: "center",
      alignItems: "center",
      gridArea: "1/2",
    },
    ".submenu": {
      justifySelf: "flex-end",
      alignItems: "center",
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

  // setup menu toggle event
  const toggleMobileNav = (state) => {
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
                mt: 1,
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

          {menuMobileSecondary?.items && (
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
