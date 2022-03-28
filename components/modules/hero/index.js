import React from "react";
import { Themed, Flex } from "theme-ui";
import { Width } from "../../width";
import { heroPath } from "./heroPaths";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { HeroAnimation } from "./heroAnimation";

const style = {
  hero: {
    mt: 2,
    position: "relative",
    contain: "paint",
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
  },
};

const parentVariant = {
  visible: {
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const childVariant = {
  hidden: { pathLength: 0, opacity: 0.5 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2, bounce: 0 },
      duration: 2,
    },
  },
};

const offsiteVariant = {
  hidden: { pathLength: 0, opacity: 0.5 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      when: "afterChildren",
      delay: 3.5,
      pathLength: { type: "spring", duration: 5, bounce: 0 },
    },
  },
};

const intersectionVariant = {
  hidden: {
    WebkitMaskImage:
      "linear-gradient(-60deg, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 1) 100%)",
  },
  visible: {
    WebkitMaskImage:
      "linear-gradient(-60deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%)",
    transition: {
      opacity: { duration: 4 },
      ease: [0.1, 0.11, 0.37, 0.84],
      duration: 3.5,
    },
  },
};

const cardVariant = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: [0.1, 0.11, 0.37, 0.84],
      duration: 2,
      bounce: 0,
      delay: 2,
      when: "beforeChildren",
    },
  },
};

const Hero = ({ data }) => {
  const { header, lead } = data;
  const words = ["compliance", "audits", "management"];
  const getPercentage = [...words, words.at(0)].map((e, i) => {
    return `-${i * (100 / (words.length + 1))}%`;
  });

  return (
    <section
      sx={{
        "--heroColor": "#3C1F04",
        ...style.hero,
      }}
    >
      <div sx={style.heroInner}>
        <Width sx={{ pl: 4, py: 4, pr: 2, flexShrink: 0 }} value={[5]}>
          <Themed.h1 sx={{ mt: 0, mb: "5rem" }}>
            {header}
            <div
              sx={{
                height: "3.25rem",
                overflow: "hidden",
                position: "relative",
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
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: 0,
                  transform: "translateY(0%)",
                }}
              >
                {[...words, words.at(0)].map((e, i) => {
                  return (
                    <div
                      sx={{ width: "100%", height: "100%", py: 1 }}
                      key={e + i}
                    >
                      {e}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </Themed.h1>

          <Themed.h4 sx={{ m: 0, mb: "3rem", width: "19ch" }}>{lead}</Themed.h4>

          <Flex sx={{ gap: 3, zIndex: 1, position: "relative" }}>
            <NextLink href="">
              <a
                sx={{
                  variant: "buttons.primary",
                  background: "var(--heroColor)",
                }}
              >
                Book a Demo
              </a>
            </NextLink>
            <NextLink href="">
              <a
                sx={{
                  variant: "buttons.secondary",
                }}
              >
                Watch a video
              </a>
            </NextLink>
          </Flex>
        </Width>
        <Width
          sx={{
            position: "absolute",
            right: -6,
          }}
          value={[8]}
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
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.003 0V112H421.003C405.539 112 393.003 124.536 393.003 140V168H337.003H309C293.536 168 281 180.536 281 196V224L197 224C181.536 224 169 236.536 169 252V280L141 280C125.536 280 113 292.536 113 308V336L84.9998 336C69.536 336 57 348.536 57 364V364C57 379.464 69.5361 392 85 392L113 392H169V448H113V531.999C113 547.463 100.464 559.999 85 559.999H29.0002C13.5361 559.999 1.00008 572.536 1.00017 588L1.00295 1040.5"
            />
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V112H421.004C405.54 112 393.004 124.536 393.004 140V168H337V224H281H225V280H169V336H113V448H169V504H85C69.536 504 57 516.536 57 532V560"
            />
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H393V224H337V336H169V392H225V448H169V504H197C212.464 504 225 491.464 225 476V447"
            />
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H337V336H225V392H281V448V476C281 491.464 293.536 504 309 504H337"
            />
            <HeroAnimation loop="flow-1" />
            <HeroAnimation loop="flow-2" />
            <HeroAnimation loop="flow-3" />
            <HeroAnimation loop="flow-4" />
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224V280H337V336H281V392H309C324.464 392 337 404.536 337 420V448V504H393V448H449V504H505V448H561V504H617V448H673V504H701C716.464 504 729 491.464 729 476V448H841"
            />

            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H505V280H449.004V336H393V504"
            />

            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168V336H365.5V364C365.5 379.464 378.036 392 393.5 392H449.004V448"
            />

            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H393V336H281V392V448H337H393V504H449V448H505V504H561V448H617V504H673V448H729V392H785V392C799.912 392 812 404.088 812 419V448"
            />

            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H505H561V224H505V280H561H617V336V448"
            />

            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H505V336H561V392H589V392C589 376.536 601.536 364 617 364H673C688.464 364 701 376.536 701 392V392C701 407.464 688.464 420 673 420H616.5C601.312 420 589 407.688 589 392.5V392.5"
            />
            <foreignObject width="100%" height="100%">
              <motion.div variants={intersectionVariant}>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 897.5 1041.5"
                  aria-labelledby="hero-"
                  className="css-mbumtg-Hero"
                  initial="hidden"
                  animate="visible"
                  variants={parentVariant}
                >
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={heroPath.intersections}
                    fill="currentColor"
                  />
                </motion.svg>
              </motion.div>
            </foreignObject>
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H561V336H617H673V392H617"
            />
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H617V280H673V336H729V392H673V448"
            />
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H617H673V280H729V336H785V392"
            />
            <motion.path
              variants={childVariant}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V112H477C492.464 112 505 124.536 505 140V168H589C604.464 168 617 180.536 617 196V224H701C716.464 224 729 236.536 729 252V280H757C772.464 280 785 292.536 785 308V336H813C828.464 336 841 348.536 841 364V476C841 491.464 853.536 504 869 504H897"
            />
            <motion.path
              variants={cardVariant}
              fillRule="evenodd"
              clipRule="evenodd"
              d={heroPath.canadaCard}
              fill="currentColor"
            />
            <motion.path
              variants={cardVariant}
              fillRule="evenodd"
              clipRule="evenodd"
              d={heroPath.amsterdamCard}
              fill="currentColor"
            />
            <svg
              y={"calc(50% - 17.25px)"}
              x={"calc(100% - 1px)"}
              width="3000"
              height="2"
              viewBox="0 0 3000 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={offsiteVariant}
                vectorEffect="non-scaling-stroke"
                shapeRendering="geometricPrecision"
                d="M0 0H3000"
                stroke="black"
              />
            </svg>

            <HeroAnimation loop="checkReview" />
            <HeroAnimation loop="checkReview2" />
          </motion.svg>
        </Width>
      </div>
    </section>
  );
};

export default Hero;
