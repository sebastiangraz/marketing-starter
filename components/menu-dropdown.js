import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Icon from "../components/icon";
import { getStaticRoute, getActive } from "../lib/routes";
import CustomLink from "../components/link";

const Dropdown = ({ id, title, items, onClick }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function menuInteraction(bool) {
    setIsOpen(bool);
  }

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
      onMouseEnter={() => menuInteraction(true)}
      onMouseLeave={() => menuInteraction(false)}
    >
      <a
        sx={{ variant: "text.navlink", paddingRight: "1rem" }}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${id}`}
      >
        {title}
        <div
          sx={{
            position: "absolute",
            display: "inline-block",
            ml: "4px",
            svg: {
              transition: ".3s cubic-bezier(.22,1,.36,1)",
              top: "0.1rem",
              position: "relative",
              width: ".75rem",
              height: "100%",
              transform: "rotate(0deg)",
              ...(isOpen && {
                transform: "rotate(45deg)",
              }),
            },
          }}
        >
          <Icon color="currentColor" name="Plus"></Icon>
        </div>
      </a>

      <div id={`dropdown-${id}`} sx={{ width: "0px" }}>
        <motion.ul
          variants={list}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          sx={{
            p: "0px",
            pt: "1rem",
            left: "0px",
            listStyle: "none",
            display: "flex",
            position: ["relative", "absolute"],
            width: "100%",
            justifyContent: ["flex-start", "center"],
            "> * ": {
              pr: 3,
            },
            "> *:last-child": {
              pr: 0,
            },
          }}
        >
          {items.map((item, key) => {
            const isStatic = getStaticRoute(item.page?.type);
            const isActive = getActive(isStatic, item.page?.slug, router);

            return (
              <motion.li
                sx={{ variant: "text.small" }}
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
