import React, { memo } from "react";

import { motion } from "framer-motion";

const style = {
  innerSection: {
    mt: "25vh",
    p: [3, 6],
    gridColumn: "span 12",
    height: `calc(65%)`,
    maxHeight: "100vmin",
    borderRadius: "3rem",
    overflow: "hidden",
    pointerEvents: "none",
    transition: "background 1s ease, box-shadow 1s ease",
    boxShadow: "0 0 0 1px currentColor inset",
    background: "#fff",
    "&.active ": {
      boxShadow: "0 0 0 1px transparent inset",
      background: "#F3EFED",
    },
  },
  section: {
    maxWidth: "1288px",
    height: "100vh",
    "&:first-of-type": {
      "& > *": {
        ml: "0px",
      },
    },
  },
};

const childVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const childVariantInner = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      when: "beforeChildren",
    },
  },
};

export const ParallaxCard = memo(
  ({
    data,
    gapWidth,
    active,
    index,
    isSolo,
    columnCountEqualTo12,
    onClick,
  }) => {
    return (
      <motion.div
        data-index={index}
        sx={{
          ...style.section,
        }}
        variants={childVariant}
        initial="hidden"
        whileInView="visible"
        onClick={isSolo || columnCountEqualTo12 ? null : onClick}
      >
        <motion.div
          sx={style.innerSection}
          className={active === index ? "active" : ""}
        >
          <motion.div variants={childVariantInner} whileInView="visible">
            {" "}
            <h2>{data.heading}</h2>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

ParallaxCard.displayName = "ParallaxCard";
