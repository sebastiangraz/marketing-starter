import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Flex, Text, Themed } from "theme-ui";
import Reveal from "../reveal";
import { Width } from "../width";

const FeatureSelector = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(data?.features[0]);

  return (
    <LayoutGroup id={data.header}>
      <section className="section">
        <div sx={{ variant: "layout.row" }}>
          <Reveal>
            <Themed.h1>{data.header}</Themed.h1>
          </Reveal>
          <Flex sx={{ justifyContent: "space-between", width: "100%" }}>
            <Width
              value={[8]}
              sx={{
                borderRadius: "default",
                p: 4,
                background: "beige",
                minHeight: "50vh",
              }}
            >
              <Reveal>
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={selectedTab ? selectedTab.featureTitle : "empty"}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", duration: 0.25 }}
                  >
                    <Themed.h2 sx={{ mt: 0 }}>
                      {selectedTab ? selectedTab.featureTitle : "Empty"}
                    </Themed.h2>
                    <Text>
                      {selectedTab ? selectedTab.featureDescription : "Empty"}
                    </Text>
                  </motion.div>
                </AnimatePresence>
              </Reveal>
            </Width>

            <Width value={[3]}>
              <nav>
                <ul
                  sx={{
                    m: 0,
                    p: 0,
                    display: "inline-grid",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <Reveal
                    effect={[
                      { opacity: 0, y: -10 },
                      { opacity: 1, y: 0 },
                    ]}
                    duration={1}
                    childDelay={0.25}
                  >
                    {data?.features.map((item) => (
                      <li
                        sx={{
                          display: "inline-block",
                          position: "relative",
                          cursor: "pointer",
                          listStyle: "none",
                          padding: "0.5rem 1.25rem",
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
                      </li>
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
