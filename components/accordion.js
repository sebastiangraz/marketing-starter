import React, { useState } from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import Icon from "../components/icon";

const accordionAnim = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

const style = {
  accordion: {
    width: "100%",
  },
  accordionButton: {
    variant: "styles.buttonReset",
    width: "100%",
    alignItems: "center",
    display: "flex",
    borderBottom: "1px solid currentColor",
    justifyContent: "space-between",
    py: 3,
    px: "0px",
    fontSize: 2,
  },
  accordionContent: {
    overflow: "hidden",
  },
};

const Accordion = ({
  id,
  title,
  isOpen = false,
  isControlled = false,
  onToggle = () => {},
  className,
  children,
}) => {
  const [hasFocus, setHasFocus] = useState(isOpen);

  return (
    <div key={id} sx={style.accordion}>
      {!isControlled && (
        <button
          onClick={() => onToggle(id, !isOpen)}
          aria-expanded={isOpen}
          sx={style.accordionButton}
          aria-controls={`accordion-${id}`}
          className={cx("accordion--toggle", { "is-open": isOpen })}
        >
          {title}
          <div className="accordion--icon">
            <Icon name="Chevron Down" />
          </div>
        </button>
      )}

      <motion.div
        id={`accordion-${id}`}
        sx={style.accordionContent}
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        variants={accordionAnim}
        transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
        onAnimationComplete={(v) => setHasFocus(v === "open")}
      >
        <div className="accordion--inner" hidden={!isOpen && !hasFocus}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
