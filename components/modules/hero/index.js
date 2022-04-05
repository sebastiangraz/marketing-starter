import { Themed, Flex, Button } from "theme-ui";
import { Width } from "../../width";
import { heroPath } from "./heroPaths";
import NextLink from "next/link";
import { motion } from "framer-motion";
import Reveal from "../../../components/reveal";
import { HeroAnimation } from "./heroAnimation";
import cursor from "../../../public/youcursor.png";
import cursor2x from "../../../public/youcursor@2x.png";

const style = {
  hero: {
    position: "relative",
    overflow: "hidden",
    color: "var(--heroColor)",
  },
  heroInner: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "large",
    justifyContent: "space-between",
    background: "#F6E9D9",
    variant: "layout.row",
    "&:hover, &:hover button": {
      cursor: `-webkit-image-set( url(${cursor.src}) 1x, url(${cursor2x.src}) 2x), auto`,
    },
  },
};

const parentVariant = {
  visible: {
    transition: {
      type: "spring",
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = ({ data }) => {
  const { header, lead } = data;
  const words = ["compliance", "audits", "management"];
  const getPercentage = [...words, words[0]].map((e, i) => {
    return `-${i * 100}%`;
  });

  return (
    <section
      sx={{
        "--heroColor": "text",
        ...style.hero,
      }}
    >
      <Reveal
        effect={[
          { opacity: 0, visibility: "hidden" },
          { opacity: 1, visibility: "visible" },
        ]}
      >
        <div sx={style.heroInner}>
          <Width sx={{ pl: 4, py: 4, pr: 2, flexShrink: 0 }} value={[12]}>
            <Themed.h1
              sx={{ mt: 0, mb: "5rem", maxWidth: "16ch", width: "100%" }}
            >
              <span>{header} </span>
              {/* test */}
              <motion.div
                sx={{
                  display: "inline-grid",
                  overflow: "hidden",
                  position: "relative",
                  pr: "1ch",
                }}
              >
                <motion.div
                  animate={{
                    y: getPercentage,
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.1,
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  sx={{
                    display: "inline-grid",
                    position: "relative",
                  }}
                >
                  {[...words, words[0]].map((e, i) => {
                    return (
                      <div
                        sx={{
                          position: "relative",
                          gridArea: "-1/1",
                          minWidth: "100%",
                          top: `${100 * i}%`,
                          height: "100%",
                          pb: "0.5rem",
                        }}
                        key={e + i}
                      >
                        {e}
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </Themed.h1>

            <Themed.h4 sx={{ m: 0, mb: "3rem", width: "20ch" }}>
              {lead}
            </Themed.h4>

            <Flex sx={{ gap: "1rem", zIndex: 1, position: "relative" }}>
              <NextLink href="/" passHref>
                <Button variant="primary">Book a Demo</Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button variant="secondary">Watch the video</Button>
              </NextLink>
            </Flex>
          </Width>
          <Width
            sx={{
              position: ["relative", null, "absolute"],
              right: [0, null, -6],
            }}
            value={[12, 12, 8]}
          >
            <motion.svg
              sx={{ overflow: "visible" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 897.5 1041.5"
              aria-labelledby="hero-"
              className="css-mbumtg-Hero"
              initial="hidden"
              animate="visible"
              variants={parentVariant}
            >
              <HeroAnimation loop="intersectingLines" />
              <HeroAnimation loop="introPaths" />

              <HeroAnimation loop="flow-1" />
              <HeroAnimation loop="flow-2" />
              <HeroAnimation loop="flow-3" />
              <HeroAnimation loop="flow-4" />

              <HeroAnimation loop="secondaryCards" />
              <HeroAnimation loop="liquidateCard" />
              <HeroAnimation loop="checkReview" />

              <HeroAnimation loop="globalNotifications" />
              <HeroAnimation loop="liquidate" />
              <HeroAnimation loop="taxManager" />
              <HeroAnimation loop="taxAdvisor" />
              <HeroAnimation loop="offSite" />
            </motion.svg>
          </Width>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
