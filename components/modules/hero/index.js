import { Themed, Flex } from "theme-ui";
import { Width } from "../../width";
import { heroPath } from "./heroPaths";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { HeroAnimation } from "./heroAnimation";
import cursor from "../../../public/youcursor.png";
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
    "&:hover, &:hover a": {
      cursor: `url("${cursor.src}"), auto`,
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

const childVariant = {
  hidden: { pathLength: 0, opacity: 0.5 },
  visible: {
    pathLength: 1,
    opacity: [1, 0],
    transition: {
      opacity: { delay: 3 },
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
  hidden: { x1: -1, x2: -2, y1: -1, y2: -2 },
  visible: {
    x1: 2,
    x2: 1,
    y1: 2,
    y2: 1,
    transition: {
      when: "beforeChildren",
      duration: 5,
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
  const getPercentage = [...words, words[0]].map((e, i) => {
    return `-${i * 100}%`;
  });

  return (
    <section
      sx={{
        "--heroColor": "#3C1F04",
        ...style.hero,
      }}
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

          <Themed.h4 sx={{ m: 0, mb: "3rem", width: "20ch" }}>{lead}</Themed.h4>

          <Flex sx={{ gap: "1rem", zIndex: 1, position: "relative" }}>
            <NextLink href="/">
              <a
                sx={{
                  variant: "buttons.primary",
                  background: "var(--heroColor)",
                }}
              >
                Book a Demo
              </a>
            </NextLink>
            <NextLink href="/">
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
            <HeroAnimation loop="flow-1" />
            <HeroAnimation loop="flow-2" />
            <HeroAnimation loop="flow-3" />
            <HeroAnimation loop="flow-4" />
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 897.5 1041.5"
              aria-labelledby="hero-"
              className="css-mbumtg-Hero"
            >
              <defs>
                <motion.linearGradient id="grad" variants={intersectionVariant}>
                  <stop offset="0%" stopColor="black" />
                  <stop offset="100%" stopColor="white" />
                </motion.linearGradient>
                <mask id="mask">
                  <rect width="100%" height="100%" fill="url(#grad)" />
                </mask>
              </defs>

              <motion.path
                sx={{ width: "100%", height: "100%" }}
                mask="url(#mask)"
                fillRule="evenodd"
                clipRule="evenodd"
                d={heroPath.intersections}
                fill="currentColor"
              />
            </motion.svg>
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
              d="M449.004 0V112H421.004C405.54 112 393.004 124.536 393.004 140V168H337V224H281V252C281 267.464 268.464 280 253 280H169V336H113V448H169V504H85C69.536 504 57 516.536 57 532V560"
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

            <motion.g variants={cardVariant}>
              <g transform="translate(190,243)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37258 0 0 5.37258 0 12V70C0 73.3137 2.68629 76 6 76H119C122.314 76 125 73.3137 125 70V6C125 2.68629 122.314 0 119 0H12ZM13 16C13 14.3431 14.3431 13 16 13H33C34.6569 13 36 14.3431 36 16V24C36 25.6569 34.6569 27 33 27H16C14.3431 27 13 25.6569 13 24V16ZM21.34 24.1C22.93 24.1 24 23.06 24 21.3V17.1C24 17.03 23.97 17 23.9 17H22.84C22.77 17 22.74 17.03 22.74 17.1V21.29C22.74 22.44 22.18 22.94 21.34 22.94C20.5 22.94 19.94 22.44 19.94 21.29V17.1C19.94 17.03 19.91 17 19.84 17H18.78C18.71 17 18.68 17.03 18.68 17.1V21.3C18.68 23.06 19.75 24.1 21.34 24.1ZM27.7097 24.1C29.3397 24.1 30.4097 23.3 30.4097 21.88C30.4097 20.77 29.2797 20.27 28.0897 19.94C27.1997 19.69 26.4297 19.42 26.4297 18.83C26.4297 18.31 26.9497 18.06 27.5997 18.06C28.2997 18.06 28.8397 18.37 28.9397 18.99C28.9497 19.06 28.9697 19.09 29.0397 19.09H30.0997C30.1697 19.09 30.1997 19.06 30.1997 18.99C30.1697 17.9 29.1697 16.9 27.6197 16.9C26.3497 16.9 25.1697 17.61 25.1697 18.89C25.1697 20.04 26.0597 20.57 27.5597 20.95C28.5197 21.19 29.1497 21.51 29.1497 22.01C29.1497 22.56 28.6197 22.94 27.7697 22.94C26.9097 22.94 26.3197 22.55 26.2497 21.74C26.2397 21.67 26.2197 21.64 26.1497 21.64H25.0997C25.0297 21.64 24.9997 21.67 24.9997 21.74C25.0097 23.04 26.1497 24.1 27.7097 24.1Z"
                  fill="currentColor"
                />
                <path d={heroPath.cardText1} fill="white" />
              </g>
            </motion.g>

            <motion.g variants={cardVariant}>
              <g transform="translate(414,355)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 0C2.68629 0 0 2.68629 0 6V70C0 73.3137 2.68629 76 6 76H119C122.314 76 125 73.3137 125 70V6C125 2.68629 122.314 0 119 0H6ZM13 16C13 14.3433 14.3438 13 16 13H33C33.8164 13 34.5586 13.3271 35.1016 13.8579C35.6562 14.4023 36 15.1611 36 16V24C36 25.6567 34.6562 27 33 27H16C14.3438 27 13 25.6567 13 24V16ZM18.8203 24H19.8789C19.9492 24 19.9805 23.9702 19.9805 23.8999V19.1299L23.0312 23.9199C23.0703 23.98 23.1211 24 23.1914 24H24.2188C24.2891 24 24.3203 23.9702 24.3203 23.8999V17.1001C24.3203 17.0298 24.2891 17 24.2188 17H23.1602C23.0898 17 23.0586 17.0298 23.0586 17.1001V21.8701L20.0117 17.0801C19.9688 17.02 19.9219 17 19.8516 17H18.8203C18.75 17 18.7188 17.0298 18.7188 17.1001V23.8999C18.7188 23.9702 18.75 24 18.8203 24ZM25.8594 24H30.4297C30.5 24 30.5312 23.9702 30.5312 23.8999V22.9399C30.5312 22.897 30.5195 22.8687 30.4922 22.8535C30.4766 22.8442 30.457 22.8398 30.4297 22.8398H27.0195V17.1001C27.0195 17.0298 26.9922 17 26.9219 17H25.8594C25.793 17 25.7617 17.0298 25.7617 17.1001V23.8999C25.7617 23.9702 25.793 24 25.8594 24Z"
                  fill="currentColor"
                />

                <path d={heroPath.cardText2} fill="white" />
                <g>
                  <clipPath id="clipper">
                    <motion.rect
                      ry="6"
                      width="125"
                      height="76"
                      initial={{ width: 125 }}
                      animate={{ width: [0, 0, 125, 125, 125, 0] }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: 7,
                        repeatDelay: 7,
                        repeatType: "loop",
                      }}
                    ></motion.rect>
                  </clipPath>
                  <g clipPath="url(#clipper)">
                    <rect
                      ry="6"
                      width="125"
                      height="76"
                      fill="currentColor"
                    ></rect>
                    <g transform="translate(13,13)">
                      <g transform="translate(0,32)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM6.70711 12.7071L9 10.4142L11.2929 12.7071L12.7071 11.2929L10.4142 9L12.7071 6.70711L11.2929 5.29289L9 7.58579L6.70711 5.29289L5.29289 6.70711L7.58579 9L5.29289 11.2929L6.70711 12.7071Z"
                          fill="#ffffff"
                        />
                      </g>

                      <motion.path
                        initial={{ scale: 1.2 }}
                        animate={{
                          scale: [1.2, 1.2, 1, 1, 1, 0.9],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          delay: 7,
                          repeatDelay: 7,
                          repeatType: "loop",
                        }}
                        d={heroPath.cardText3}
                        fill="#ffffff"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </motion.g>
            <svg
              y="503.5"
              x="896px"
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
                stroke="currentColor"
              />
            </svg>

            <HeroAnimation loop="checkReview" />
            <HeroAnimation loop="liquidate" />
            <HeroAnimation loop="taxManager" />
          </motion.svg>
        </Width>
      </div>
    </section>
  );
};

export default Hero;
