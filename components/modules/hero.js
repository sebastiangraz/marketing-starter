import React from "react";
import { Themed, Flex } from "theme-ui";
import { Width } from "../width";
import { hero } from "../icon";
import NextLink from "next/link";
import { motion } from "framer-motion";

const style = {
  hero: {
    mt: 2,
    position: "relative",
  },
  heroInner: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "large",
    justifyContent: "space-between",
    background: "primary",
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

const intersectionVariant = {
  hidden: {
    clipPath: "circle(0% at 5% 40%)",
    transition: {
      // when: "beforeChildren",
    },
  },
  visible: {
    clipPath: "circle(85% at 5% 40%)",
    transition: { ease: [0.1, 0.11, 0.37, 0.84], duration: 3 },
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
      type: "spring",
      duration: 2,
      bounce: 0,
      delay: 2,
      when: "beforeChildren",
    },
  },
};

const cursorVariant = {
  hidden: {
    y: 0,
    x: 0,
  },
  visible: {
    y: [200, 200, 120, 90, 90, 200],
    x: [-180, -180, -170, -110, -110, -180],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 4,
      type: "spring",
      duration: 3,
      delay: 4,
    },
  },
};

const notificationVariant = {
  hidden: {
    y: -8,
    opacity: 0,
  },
  visible: {
    y: [8, 0, 0, 0, -8],
    opacity: [0, 1, 1, 1, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 4,
      type: "spring",
      duration: 3,
      delay: 4,
    },
  },
};

const Hero = ({ data }) => {
  const { header, lead } = data;

  return (
    <section
      sx={{
        ...style.hero,
      }}
    >
      <div sx={style.heroInner}>
        <Width sx={{ pl: 4, py: 4, pr: 2, flexShrink: 0 }} value={[5]}>
          <Themed.h1 sx={{ mt: 0, mb: "5rem" }}>
            {header}
            <span> compliance</span>
          </Themed.h1>
          <Themed.p sx={{ m: 0, mb: "4rem" }}>{lead}</Themed.p>
          <Flex sx={{ gap: 3, zIndex: 1, position: "relative" }}>
            <NextLink href="">
              <a
                sx={{
                  variant: "buttons.primary",
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
            // "&:before": {
            //   content: `""`,
            //   position: "absolute",
            //   left: 0,
            //   top: "100%",
            //   width: "1px",
            //   height: "80px",
            //   bg: "currentColor",
            //   willChange: "transform",
            // },
            position: "absolute",
            right: -6,
          }}
          value={[8]}
        >
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
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.003 0V112H421.003C405.539 112 393.003 124.536 393.003 140V168H337.003H309C293.536 168 281 180.536 281 196V224L197 224C181.536 224 169 236.536 169 252V280L141 280C125.536 280 113 292.536 113 308V336L84.9998 336C69.536 336 57 348.536 57 364V364C57 379.464 69.5361 392 85 392L113 392H169V448H113V531.999C113 547.463 100.464 559.999 85 559.999H29.0002C13.5361 559.999 1.00008 572.536 1.00017 588L1.00295 1040.5"
            />
            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V112H421.004C405.54 112 393.004 124.536 393.004 140V168H337V224H281H225V280H169V336H113V448H169V504H85C69.536 504 57 516.536 57 532V560"
            />
            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H393V224H337V336H169V392H225V448H169V504H197C212.464 504 225 491.464 225 476V447"
            />
            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H337V336H225V392H281V448V476C281 491.464 293.536 504 309 504H337"
            />

            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224V280H337V336H281V392H309C324.464 392 337 404.536 337 420V448V504H393V448H449V504H505V448H561V504H617V448H673V504H701C716.464 504 729 491.464 729 476V448H841"
            />

            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H505V280H449.004V336H393V504"
            />

            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168V336H365.5V364C365.5 379.464 378.036 392 393.5 392H449.004V448"
            />

            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H393V336H281V392V448H337H393V504H449V448H505V504H561V448H617V504H673V448H729V392H785V392C799.912 392 812 404.088 812 419V448"
            />

            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H505H561V224H505V280H561H617V336V448"
            />
            <motion.path
              variants={intersectionVariant}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d={hero.intersections}
              fill="currentColor"
            />
            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V168H505V336H561V392H589V392C589 376.536 601.536 364 617 364H673C688.464 364 701 376.536 701 392V392C701 407.464 688.464 420 673 420H616.5C601.312 420 589 407.688 589 392.5V392.5"
            />

            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H561V336H617H673V392H617"
            />
            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H617V280H673V336H729V392H673V448"
            />
            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V224H617H673V280H729V336H785V392"
            />
            <motion.path
              variants={childVariant}
              stroke="currentColor"
              fill="transparent"
              vectorEffect="non-scaling-stroke"
              d="M449.004 0V112H477C492.464 112 505 124.536 505 140V168H589C604.464 168 617 180.536 617 196V224H701C716.464 224 729 236.536 729 252V280H757C772.464 280 785 292.536 785 308V336H813C828.464 336 841 348.536 841 364V476C841 491.464 853.536 504 869 504H897"
            />
            <motion.path
              variants={cardVariant}
              fillRule="evenodd"
              clipRule="evenodd"
              d={hero.canadaCard}
              fill="currentColor"
            />
            <motion.path
              variants={cardVariant}
              fillRule="evenodd"
              clipRule="evenodd"
              d={hero.amsterdamCard}
              fill="currentColor"
            />

            <foreignObject width="100%" height="100%">
              <motion.div
                variants={notificationVariant}
                sx={{
                  width: "210px",
                  top: "309px",
                  position: "relative",
                  left: "160px",
                }}
              >
                <svg
                  // width="189"
                  // height="42"
                  // viewBox="0 0 189 42"
                  fill="none"
                  overflow="auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="4.5"
                    width="183"
                    height="37"
                    rx="18.5"
                    fill="white"
                    stroke="currentColor"
                  />
                  <motion.rect
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0.2, 0.2, 0.2, 0.2, 0.1],
                      scale: [1, 1, 1, 1.2, 1.8],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 4,
                      type: "spring",
                      duration: 3,
                      delay: 4,
                    }}
                    x="9"
                    y="14"
                    width="18"
                    height="18"
                    rx="9"
                    fill="currentColor"
                  />
                  <motion.rect
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0.5, 0.5, 0.5, 1, 0],
                      scale: [1, 1, 1, 1.2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 4,
                      type: "spring",
                      duration: 3,
                      delay: 4,
                    }}
                    x="9"
                    y="14"
                    width="18"
                    height="18"
                    rx="9"
                    fill="currentColor"
                  />
                  <path
                    d="M15 23L17 25L21 21"
                    stroke="#F6E9D9"
                    strokeLinecap="round"
                  />
                  <path d={hero.notificationText0} fill="currentColor" />
                  <rect
                    x="173"
                    y="2"
                    width="14"
                    height="14"
                    rx="7"
                    fill="currentColor"
                  />
                  <path
                    d="M179.918 13H180.938C181.008 13 181.038 12.97 181.038 12.9V6.1C181.038 6.03 181.008 6 180.938 6H180.378C180.318 6 180.268 6.02 180.218 6.05L178.568 6.94C178.508 6.97 178.458 7.02 178.458 7.09V8.16C178.458 8.23 178.488 8.25 178.538 8.25C178.568 8.25 178.598 8.24 178.638 8.22L179.818 7.56V12.9C179.818 12.97 179.848 13 179.918 13Z"
                    fill="#F6E9D9"
                  />
                </svg>
              </motion.div>
              <motion.div
                variants={cursorVariant}
                xmlns="http://www.w3.org/1999/xhtml"
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "30%",
                  width: "40px",
                  height: "50px",
                }}
              >
                <motion.div
                  sx={{
                    offsetRotate: "0deg",
                    offsetPath: `path(
                "M12.68 9.85c.56-2.5.72-7.27-2.81-8.31C5.04.1-.94 1.44 1.61 6.72c2.55 5.27 7.2 6.35 12.39-.63"
              )`,
                  }}
                  initial={{ offsetDistance: "0%", scale: 1 }}
                  animate={{ offsetDistance: "100%", scale: 1 }}
                  transition={{
                    duration: 4,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.svg sx={{ width: "100%", height: "100%" }}>
                    <path
                      vectorEffect="non-scaling-stroke"
                      d="M31.6115 4.70781L5.70539 13.9043C3.88897 14.5491 3.94607 17.1374 5.78916 17.7015L13.1443 19.9526C13.6972 20.1218 14.1498 20.5221 14.3854 21.0502L20.4719 34.6922C21.2038 36.3327 23.5594 36.2515 24.1766 34.5645L34.1588 7.27974C34.7405 5.68984 33.2069 4.14145 31.6115 4.70781Z"
                      fill="#F6E9D9"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    />
                    <path
                      vectorEffect="non-scaling-stroke"
                      d="M30.2157 1.77049L6.42009 11.7141C4.67666 12.4426 4.82264 14.9595 6.63862 15.4816L14.7947 17.8264C15.3736 17.9928 15.8467 18.4114 16.0825 18.9657L21.1866 30.9659C21.541 31.799 22.7317 31.77 23.045 30.9207L32.8632 4.30811C33.468 2.66894 31.8278 1.09685 30.2157 1.77049Z"
                      fill="white"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </foreignObject>
          </motion.svg>
        </Width>
      </div>
    </section>
  );
};

export default Hero;
