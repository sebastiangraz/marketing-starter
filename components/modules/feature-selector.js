import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Box, Flex, Text, Themed } from "theme-ui";
import Photo from "../photo";
import Reveal from "../reveal";
import { Width } from "../width";

const FeatureSelector = ({ data }) => {
  const selectorVariant = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: -8,
    },
  };

  const selectorImageVariant = {
    hidden: {
      y: 8,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    hide: {
      y: -12,
      opacity: 0,
    },
  };

  const selectorTransition = {
    type: "spring",
    duration: 0.3,
  };

  const selectorTransitionDelay = {
    type: "spring",
    duration: 0.7,
  };

  const [selectedTab, setSelectedTab] = useState(data?.features[0]);

  return (
    <LayoutGroup id={data._key}>
      <section className="section">
        <div sx={{ variant: "layout.row" }}>
          <Reveal>
            <Themed.h1>{data.header}</Themed.h1>
          </Reveal>
          <Flex
            sx={{
              justifyContent: "space-between",
              width: "100%",
              gap: 2,
              flexDirection: ["column", "column", "row"],
            }}
          >
            <Width
              value={[12, 12, 8]}
              sx={{
                order: [1, null, 0],
                borderRadius: "default",
                flex: 1,
                display: "grid",
                background: "ui",
                minHeight: ["360px", "44vh"],
                overflow: "hidden",
              }}
            >
              <Reveal childStyle={{ display: "flex" }} sx={{ display: "grid" }}>
                <AnimatePresence exitBeforeEnter>
                  <div
                    key={selectedTab.featureTitle + data._key}
                    sx={{
                      display: "grid",
                      position: "relative",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Flex
                      sx={{
                        p: 4,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        gridArea: "-1/1",
                      }}
                    >
                      <motion.div
                        variants={selectorVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hide"
                        transition={selectorTransition}
                      >
                        <Themed.h4 sx={{ mt: 0, display: ["none", "block"] }}>
                          {selectedTab ? selectedTab.featureTitle : "Empty"}
                        </Themed.h4>
                      </motion.div>

                      <motion.div
                        variants={selectorVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hide"
                        transition={selectorTransitionDelay}
                      >
                        <Themed.h1 sx={{ my: 0, maxWidth: "18ch" }}>
                          {selectedTab
                            ? selectedTab.featureDescription
                            : "Empty"}
                        </Themed.h1>
                      </motion.div>
                    </Flex>
                    <motion.div
                      variants={selectorImageVariant}
                      transition={selectorTransitionDelay}
                      initial="hidden"
                      animate="visible"
                      exit="hide"
                      sx={{ gridArea: "-1/1" }}
                    >
                      <Photo
                        photo={selectedTab.image}
                        hasPlaceholder={false}
                        layout="fill"
                        sx={{
                          position: "relative",
                          gridArea: "-1/1",
                          width: "100%",
                          height: "100%",
                          "img.object-cover": {
                            objectPosition: ["80% 0", "inherit"],
                          },
                        }}
                      />
                    </motion.div>
                  </div>
                </AnimatePresence>
              </Reveal>
            </Width>

            <Width value={[12, 12, 4]} sx={{ order: [0, null, 1] }}>
              <nav>
                <ul
                  sx={{
                    m: 0,
                    mb: 2,
                    p: 0,
                    display: "inline-grid",
                    gap: "0.25rem",
                  }}
                >
                  <Reveal
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                    childStyle={{
                      width: ["auto", null, "100%"],
                    }}
                    effect={[
                      { opacity: 0, y: -10 },
                      { opacity: 1, y: 0 },
                    ]}
                    duration={1}
                    childDelay={0.25}
                  >
                    {data?.features.map((item) => (
                      <button
                        sx={{
                          all: "unset",
                          display: ["inline-block"],
                          position: "relative",
                          cursor: "pointer",
                          listStyle: "none",
                          padding: ["0.25rem 0.75rem", "0.5rem 1.25rem"],
                          borderRadius: "24px",
                          "&:hover, &:focus-visible": {
                            boxShadow: "0 0 0 1px rgba(0,0,0,0.2)",
                          },
                        }}
                        key={item.featureTitle}
                        className={item === selectedTab ? "selected" : ""}
                        onClick={() => setSelectedTab(item)}
                      >
                        <Text
                          sx={{ display: "inline-flex", m: 0 }}
                        >{`${item.featureTitle}`}</Text>

                        {item === selectedTab ? (
                          <motion.div
                            style={{
                              top: 0,
                              left: 0,
                              borderRadius: "24px",
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              boxShadow: "0px 0px 0px 1px currentColor inset",
                              zIndex: -1,
                            }}
                            className="underline"
                            layoutId="underline"
                          />
                        ) : null}
                      </button>
                    ))}
                  </Reveal>
                </ul>
              </nav>
            </Width>
          </Flex>
        </div>
      </section>
    </LayoutGroup>
  );
};

export default FeatureSelector;
