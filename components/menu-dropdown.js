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
    <div sx={{ pr: 0 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${id}`}
      >
        {title}
        <div
          sx={{
            position: "absolute",
            top: "-0.025em",
            display: "inline-block",
            svg: {
              transition: "0.5s ease transform",
              ml: 0,
              width: "0.5em",
              height: "100%",
              transform: "rotate(180deg)",
              ...(isOpen && {
                transform: "rotate(0deg)",
              }),
            },
          }}
        >
          <Icon name="Chevron Down"></Icon>
        </div>
      </button>

      <div id={`dropdown-${id}`} sx={{ width: "0px" }}>
        <motion.ul
          variants={list}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          sx={{
            pt: 0,
            listStyle: "none",
            "> * + * ": {
              pl: 2,
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
