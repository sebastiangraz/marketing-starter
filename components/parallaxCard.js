import React, { memo } from "react";
import { motion } from "framer-motion";
import { Box, Grid, Text, Themed, useThemeUI } from "theme-ui";
import { List } from "./list";
import Photo from "./photo";
import { useResponsiveValue } from "@theme-ui/match-media";
const style = {
  section: {
    maxWidth: "1288px",
    height: "100vh",
    "&:first-of-type": {
      "& > *": {
        ml: "0px",
      },
    },
  },
  innerSection: {
    mt: "25vh",
    // p: [3, 4],
    gridColumn: "span 12",
    height: `calc(65%)`,
    maxHeight: "100vmin",
    borderRadius: "3rem",
    overflow: "hidden",
    pointerEvents: "none",
    transition: "background 1s ease, box-shadow 1s ease",
    background: "#fff",
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

function getTextColorFromBg(data, context) {
  let textColor = null;
  switch (data) {
    case context.theme.rawColors.green:
      textColor = context.theme.rawColors.cyan;
      break;
    case context.theme.rawColors.salmon:
      textColor = context.theme.rawColors.maroon;
      break;
    case context.theme.rawColors.maroon:
      textColor = context.theme.rawColors.salmon;
      break;
    case context.theme.rawColors.cyan:
      textColor = context.theme.rawColors.green;
      break;
    default:
      break;
  }
  return textColor;
}

export const ParallaxCard = memo(
  ({ data, index, isSolo, columnCountEqualTo12, onClick }) => {
    const context = useThemeUI();
    const textColor = getTextColorFromBg(data.color, context);
    const { color, heading, id, image, lead, listItems, sizes, title } = data;
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
          sx={{
            ...style.innerSection,
            color: textColor,
            background: color ? color : "ui",
          }}
        >
          <motion.div
            variants={childVariantInner}
            whileInView="visible"
            sx={{ height: "100%" }}
            viewport={{ amount: 0.3 }}
          >
            <Grid
              sx={{
                gap: 0,
                height: "100%",
                // gridAutoFlow: "dense columns",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto 1fr",
                alignContent: "stretch",
              }}
            >
              <Box
                sx={{
                  pt: ["3rem", "4rem"],
                  px: ["3rem", "4rem"],
                  maxWidth: "62ch",
                  gridArea: "1/1",
                  gridColumn: "span 2",
                }}
              >
                <Themed.h2 sx={{ m: 0 }}>{heading}</Themed.h2>
                <Themed.h4>{lead}</Themed.h4>
              </Box>
              <Photo
                layout="contain"
                photo={image}
                hasPlaceholder={false}
                sx={{
                  height: ["14rem", "100%"],
                  width: ["100%", "28rem"],
                  gridArea: ["-1/1 / span 1 / span 2", "2/2"],

                  placeSelf: "end",
                  "img.object-contain": {
                    objectFit: "contain",
                    objectPosition: ["right 0", "100% 100%"],
                    pl: [5, 0],
                  },
                }}
              />
              <List
                large={listItems?.size === "large"}
                sx={{
                  width: ["100%", "25rem", "25rem", "30rem"],
                  // maxWidth: "50ch",
                  gridArea: "2/1",
                  pb: ["3rem", "4rem"],
                  px: ["3rem", "4rem"],
                  alignSelf: "end",
                  gridColumn: ["span 2", "span 1"],
                }}
              >
                {listItems?.featureList.map((item) => {
                  const { id, string } = item;
                  return <React.Fragment key={id}>{string}</React.Fragment>;
                })}
              </List>
            </Grid>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

ParallaxCard.displayName = "ParallaxCard";
