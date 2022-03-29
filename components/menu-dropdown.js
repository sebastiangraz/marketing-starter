import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Icon from "../components/icon";
import { getStaticRoute, getActive } from "../lib/routes";

import CustomLink from "../components/link";

const Dropdown = ({ id, title, items, onClick }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const list = {
    visible: {
      opacity: 1,
      display: "flex",
      transition: {
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const listItem = {
    visible: {
      opacity: 1,
      y: -4,
      transition: {
        duration: 0.4,
      },
    },
    hidden: { opacity: 0, y: -2 },
  };

  return (
    <div
      sx={{ pr: 0 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button aria-expanded={isOpen} aria-controls={`dropdown-${id}`}>
        {title}
        <div
          sx={{
            position: "absolute",
            top: "-0.025em",
            display: "inline-block",
            ml: "4px",
            svg: {
              transition: ".3s cubic-bezier(.22,1,.36,1)",

              width: "0.5em",
              height: "100%",
              transform: "rotate(180deg)",
              ...(isOpen && {
                transform: "rotate(0deg)",
              }),
            },
          }}
        >
          <Icon color="currentColor" name="Chevron Down"></Icon>
        </div>
      </button>

      <div id={`dropdown-${id}`} sx={{ width: "0px" }}>
        <motion.ul
          variants={list}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          sx={{
            p: "0px",
            pt: 2,
            left: "0px",
            listStyle: "none",
            display: "flex",
            position: "absolute",
            width: "100%",
            justifyContent: "center",
            "> * + * ": {
              pl: 3,
            },
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
