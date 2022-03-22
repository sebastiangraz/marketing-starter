import React, { memo } from "react";

import { motion } from "framer-motion";

const style = {
  innerSection: {
    mt: [3, "25vh"],
    p: [3, 6],
    gridColumn: "span 12",
    height: (t) => [
      `calc(100% - ${t.sizes[3]}px)`,
      `calc(80% - ${t.sizes[15]}px)`,
    ],
    background: "#eee",
    borderRadius: "3rem",
    overflow: "hidden",
    pointerEvents: "none",
    transition: "background 1s ease",
    "&.active ": {
      background: "#aaa",
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
    const gapmath = (e) => -gapWidth / (12 / e) + gapWidth;
    return (
      <motion.div
        data-index={index}
        sx={{
          ...style.section,
          width: "720px",
          width: isSolo
            ? "100%"
            : `calc( 1288px * ${data.sizes ? data.sizes : 12} / 12 - ${gapmath(
                data.sizes
              )}px )`,
        }}
        variants={childVariant}
        initial="hidden"
        whileInView="visible"
        onClick={isSolo || columnCountEqualTo12 ? null : onClick}
      >
        <motion.div
          sx={style.innerSection}
          className={active[index] ? "active" : ""}
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
