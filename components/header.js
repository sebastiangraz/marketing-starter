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
  },
  navWrapper: {
    variant: "layout.row",
    display: "grid",
    gridTemplateColumns: `1fr 1fr 1fr`,
    alignItems: "start",
    height: "5rem",
    mt: "2rem",
    li: {
      whiteSpace: "pre",
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
      width: "100%",
      justifyContent: "center",
      justifySelf: "center",
      alignItems: "center",
      gridArea: "1/2",
    },
    ".submenu": {
      width: "100%",
      justifyContent: "flex-end",
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
      variant: "styles.buttonReset",
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
            <Menu className="menu" items={menuMobilePrimary.items} />
          )}

          {menuMobileSecondary?.items && (
            <Menu className="submenu" items={menuMobileSecondary.items} />
          )}
        </div>
      </header>

      <span className="header--observer" />
    </>
  );
};

export default Header;
