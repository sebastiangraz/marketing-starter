import React, { useState } from "react";
import { m } from "framer-motion";
import { useRouter } from "next/router";

import { getStaticRoute, getActive } from "../lib/routes";

import CustomLink from "../components/link";

const Dropdown = ({ id, title, items, onClick }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,

      transition: {
        staggerDirection: -1,
      },
    },
  };

  const listItem = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${id}`}
        className="dropdown--toggle"
      >
        <span className="dropdown--icon" />
        {title}
      </button>
      <div id={`dropdown-${id}`} sx={{ width: "0px" }}>
        <m.ul
          variants={list}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          sx={{
            pt: 2,
            listStyle: "none",
            "> * + * ": {
              pl: 3,
            },
            display: "flex",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0px)",
          }}
        >
          {items.map((item, key) => {
            const isStatic = getStaticRoute(item.page?.type);
            const isActive = getActive(isStatic, item.page?.slug, router);

            return (
              <m.li
                variants={listItem}
                key={key}
                className={isActive ? "is-active" : null}
              >
                <CustomLink
                  tabIndex={!isOpen ? -1 : null}
                  link={item}
                  onClick={onClick}
                />
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </div>
  );
};

export default Dropdown;
