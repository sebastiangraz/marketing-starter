import React, { useState } from "react";
import { useRouter } from "next/router";

import { isBrowser } from "../lib/helpers";

import Menu from "../components/menu";
const style = {
  navStyle: {
    fontSize: 1,
    borderBottom: "1px solid",
  },
  navWrapper: {
    variant: "layout.row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    py: 3,
    height: 10,
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
            {router.pathname === "/" ? "Already home" : "Logo"}
          </div>

          {menuMobilePrimary?.items && (
            <Menu
              items={menuMobilePrimary.items}
              onClick={() => toggleMobileNav(false)}
            />
          )}
          {menuMobilePrimary?.items && (
            <Menu
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
