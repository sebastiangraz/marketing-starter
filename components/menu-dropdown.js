import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <div sx={{ pr: 3 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${id}`}
      >
        {title}
        <svg
          sx={{
            transition: "0.5s ease transform",
            ml: 2,
            width: "0.5em",
            top: "0.125em",
            height: "100%",
            display: "inline-block",
            transform: "rotate(180deg)",
            position: "absolute",
            ...(isOpen && {
              transform: "rotate(0deg)",
            }),
          }}
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 2L4 5L7 2" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      </button>

      <div id={`dropdown-${id}`} sx={{ width: "0px" }}>
        <motion.ul
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
              <motion.li
                sx={{ fontSize: 1 }}
                variants={listItem}
                key={key}
                className={isActive ? "is-active" : null}
              >
                <CustomLink
                  tabIndex={!isOpen ? -1 : null}
                  link={item}
                  onClick={onClick}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default Dropdown;
