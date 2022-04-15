import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Box, Flex, Text, Themed } from "theme-ui";
import Photo from "../photo";
import Reveal from "../reveal";
import { Width } from "../width";

const FeatureSelector = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(data?.features[0]);
  console.log(data);
  return (
    <LayoutGroup id={data.header}>
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
                minHeight: ["360px", "50vh"],
                overflow: "hidden",
              }}
            >
              <Reveal childStyle={{ display: "flex" }} sx={{ display: "grid" }}>
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={selectedTab ? selectedTab.featureTitle : "empty"}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", duration: 0.25 }}
                    sx={{
                      flex: 1,
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    <Flex
                      sx={{
                        p: 4,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <Themed.h4 sx={{ mt: 0, display: ["none", "block"] }}>
                        {selectedTab ? selectedTab.featureTitle : "Empty"}
                      </Themed.h4>
                      <Themed.h1 sx={{ my: 0, maxWidth: "14ch" }}>
                        {selectedTab ? selectedTab.featureDescription : "Empty"}
                      </Themed.h1>
                    </Flex>
                    <Photo
                      photo={selectedTab.image}
                      hasPlaceholder={false}
                      layout="fill"
                      sx={{
                        margin: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        "img.object-cover": {
                          objectPosition: ["80% 0", "inherit"],
                        },
                      }}
                    />
                  </motion.div>
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
                      width: ["100%", "auto", "100%"],
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
                          padding: "0.5rem 1.25rem",
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
