import { motion } from "framer-motion";
import { heroPath } from "./heroPaths";
import { keyframes } from "@emotion/react";

const offsetDistanceKeys = keyframes`
    0%   { offset-distance: 0%; transform: scale(0.1) }
    20% { offset-distance: 20%; transform: scale(1) }
    80% { offset-distance: 80%; transform: scale(1) }
    100%   { offset-distance: 100%; transform: scale(0.1)  }
    `;

const checkReviewTransition = {
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 4,
  type: "spring",
  duration: 3,
  delay: 4,
};

const flowAnimation = {
  transform: "scale(0.1)",
  animationName: `${offsetDistanceKeys}`,
  animationDuration: "20s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
};

const cursorCheckReviewVariant = {
  hidden: {
    y: 0,
    x: 0,
  },
  visible: {
    y: [200, 200, 120, 90, 90, 200],
    x: [-180, -180, -170, -110, -110, -180],
    transition: checkReviewTransition,
  },
};

const fadeInVariant = {
  hidden: {
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
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
    transition: checkReviewTransition,
  },
};

const cursorLiquidateVariant = {
  hidden: {
    y: 0,
    x: 0,
  },
  visible: {
    y: [170, 100, 170, 170, 170, 170],
    x: [0, -100, -100, -100, 0, 0],
    transition: { ...checkReviewTransition, delay: 7 },
  },
};

const liquidateVariant = {
  hidden: {
    y: -8,
    opacity: 0,
  },
  visible: {
    y: [8, 0, 0, 0, -8, -8],
    opacity: [0, 0, 1, 1, 0, 0],
    transition: {
      ...checkReviewTransition,
      delay: 7,
    },
  },
};

export const HeroAnimation = ({ loop }) => {
  switch (loop) {
    case "flow-4":
      return (
        <motion.circle
          r="5"
          x="3"
          y="3"
          fill="currentColor"
          sx={{
            ...flowAnimation,
            animationDelay: "2s",
          }}
          style={{
            width: "12px",
            height: "12px",
            display: "flex",
            offsetPath: `path("M449.004 0V224H393V336H281V392V448H337H393V504H449V448H505V504H561V448H617V504H673V448H729V392H785V392C799.912 392 812 404.088 812 419V448`,
          }}
        />
      );
    case "flow-3":
      return (
        <motion.circle
          r="5"
          x="3"
          y="3"
          fill="currentColor"
          sx={{
            ...flowAnimation,
            animationDelay: "4s",
          }}
          style={{
            width: "12px",
            height: "12px",
            display: "flex",
            offsetPath: `path("M449.004 0V112H421.004C405.54 112 393.004 124.536 393.004 140V168H337V224H281H225V280H169V336H113V448H169V504H85C69.536 504 57 516.536 57 532V560")`,
          }}
        />
      );
    case "flow-2":
      return (
        <motion.circle
          r="5"
          x="3"
          y="3"
          fill="currentColor"
          sx={{
            ...flowAnimation,
            animationDelay: "6s",
          }}
          style={{
            width: "12px",
            height: "12px",
            display: "flex",
            offsetPath: `path("M449.004 0V168H393V224H337V336H169V392H225V448H169V504H197C212.464 504 225 491.464 225 476V447")`,
          }}
        />
      );
    case "flow-1":
      return (
        <motion.circle
          r="5"
          x="3"
          y="3"
          fill="currentColor"
          sx={{
            ...flowAnimation,
            animationDelay: "8s",
          }}
          style={{
            width: "12px",
            height: "12px",
            display: "flex",
            offsetPath: `path("M449.004 0V112H477C492.464 112 505 124.536 505 140V168H589C604.464 168 617 180.536 617 196V224H701C716.464 224 729 236.536 729 252V280H757C772.464 280 785 292.536 785 308V336H813C828.464 336 841 348.536 841 364V476C841 491.464 853.536 504 869 504H897")`,
          }}
        />
      );

    case "checkReview":
      return (
        <>
          <motion.svg
            y="310"
            x="160"
            variants={notificationVariant}
            width="189"
            height="42"
            viewBox="0 0 189 42"
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
              vectorEffect="non-scaling-stroke"
              stroke="currentColor"
            />
            <motion.rect
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0.2, 0.2, 0.2, 0.2, 0.1],
                scale: [1, 1, 1, 1.2, 1.8],
              }}
              transition={checkReviewTransition}
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
              transition={checkReviewTransition}
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
            <path d={heroPath.notificationText1} fill="currentColor" />
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
          </motion.svg>
          <g transform="translate(240, 234)">
            );
            <motion.g variants={fadeInVariant}>
              <motion.g
                initial={{ "--offset": "0%" }}
                animate={{ "--offset": "100%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                sx={{
                  offsetDistance: "var(--offset)",
                  offsetRotate: "0deg",
                  offsetPath: `path(
                "M12.68 9.85c.56-2.5.72-7.27-2.81-8.31C5.04.1-.94 1.44 1.61 6.72c2.55 5.27 7.2 6.35 12.39-.63"
                )`,
                }}
              >
                <motion.g variants={cursorCheckReviewVariant}>
                  <path
                    d="M39.5 20C39.5 15.6029 39.306 12.5673 39.0892 10.0324C39.0298 9.33712 38.9683 8.67654 38.9085 8.03393C38.7509 6.34006 38.6049 4.77103 38.5383 3.02009C38.5062 2.1774 37.8228 1.49406 36.98 1.46213C35.2279 1.39574 33.6578 1.24955 31.9623 1.09168C31.3212 1.03198 30.6621 0.970607 29.9684 0.911249C27.4335 0.694336 24.3976 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5C30.7696 39.5 39.5 30.7696 39.5 20Z"
                    fill="#F6E9D9"
                    vectorEffect="non-scaling-stroke"
                    stroke="#3C1F04"
                  />
                  <path
                    d="M37 20.0015C37 29.3903 29.3888 37.0015 20 37.0015V37.0015C10.6112 37.0015 3 29.3903 3 20.0015V20.0015C3 10.6126 10.6112 3.00146 20 3.00146V3.00146C29.3888 3.00146 37 10.6126 37 20.0015V20.0015Z"
                    fill="#3C1F04"
                  />
                  <path
                    d="M13.6804 25.0015H16.2364C18.3844 25.0015 20.1964 23.6455 20.1964 20.8015C20.1964 17.9575 18.3844 16.6015 16.2364 16.6015H13.6804C13.5964 16.6015 13.5604 16.6375 13.5604 16.7215V24.8815C13.5604 24.9655 13.5964 25.0015 13.6804 25.0015ZM15.0724 23.6095V17.9935H16.1644C17.6044 17.9935 18.6364 18.8815 18.6364 20.8015C18.6364 22.7215 17.6044 23.6095 16.1644 23.6095H15.0724ZM23.3928 25.0015H24.6648C24.7488 25.0015 24.7848 24.9655 24.7848 24.8815V17.9935H27.1368C27.2208 17.9935 27.2568 17.9575 27.2568 17.8735V16.7215C27.2568 16.6375 27.2208 16.6015 27.1368 16.6015H20.9208C20.8368 16.6015 20.8008 16.6375 20.8008 16.7215V17.8735C20.8008 17.9575 20.8368 17.9935 20.9208 17.9935H23.2728V24.8815C23.2728 24.9655 23.3088 25.0015 23.3928 25.0015Z"
                    fill="#F6E9D9"
                  />
                </motion.g>
              </motion.g>
            </motion.g>
          </g>
        </>
      );

    case "checkReview2":
      return (
        <>
          <motion.svg y="420" x="490" variants={liquidateVariant}>
            <svg
              width="84"
              height="74"
              viewBox="0 0 84 74"
              fill="none"
              overflow="auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="82"
                height="70"
                rx="16"
                fill="white"
                vectorEffect="non-scaling-stroke"
                stroke="currentColor"
              />
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.1, 0.1, 0.1, 0.36, 0, 0.1],
                }}
                transition={{ ...checkReviewTransition, delay: 8 }}
                x="8"
                y="44"
                width="68"
                height="20"
                rx="8"
                fill="currentColor"
              />
              <path
                d="M15 23L17 25L21 21"
                stroke="#F6E9D9"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <g transform="translate(15 15)">
                <path d={heroPath.notificationText2} fill="currentColor" />
              </g>
              <path
                d="M179.918 13H180.938C181.008 13 181.038 12.97 181.038 12.9V6.1C181.038 6.03 181.008 6 180.938 6H180.378C180.318 6 180.268 6.02 180.218 6.05L178.568 6.94C178.508 6.97 178.458 7.02 178.458 7.09V8.16C178.458 8.23 178.488 8.25 178.538 8.25C178.568 8.25 178.598 8.24 178.638 8.22L179.818 7.56V12.9C179.818 12.97 179.848 13 179.918 13Z"
                fill="#F6E9D9"
              />
            </svg>
          </motion.svg>
          <g transform="translate(620, 301)">
            );
            <motion.g variants={fadeInVariant}>
              <motion.g
                initial={{ "--offset": "0%" }}
                animate={{ "--offset": "100%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                sx={{
                  offsetDistance: "var(--offset)",
                  offsetRotate: "0deg",
                  offsetPath: `path(
                "M12.68 9.85c.56-2.5.72-7.27-2.81-8.31C5.04.1-.94 1.44 1.61 6.72c2.55 5.27 7.2 6.35 12.39-.63"
                )`,
                }}
              >
                <motion.g variants={cursorLiquidateVariant}>
                  <path
                    d="M0.5 20C0.5 15.6029 0.694039 12.5673 0.910751 10.0324C0.970193 9.33712 1.03166 8.67654 1.09146 8.03393C1.24909 6.34006 1.39509 4.77103 1.46171 3.02009C1.49377 2.1774 2.17725 1.49406 3.02002 1.46213C4.77213 1.39574 6.34217 1.24955 8.03768 1.09168C8.67884 1.03198 9.33794 0.970607 10.0316 0.911249C12.5665 0.694336 15.6024 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                    fill="#F6E9D9"
                    stroke="#3C1F04"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M3 20.0015C3 29.3903 10.6112 37.0015 20 37.0015V37.0015C29.3888 37.0015 37 29.3903 37 20.0015V20.0015C37 10.6126 29.3888 3.00146 20 3.00146V3.00146C10.6112 3.00146 3 10.6126 3 20.0015V20.0015Z"
                    fill="#3C1F04"
                  />
                  <path
                    d="M13.2117 25.0015H14.4837C14.5677 25.0015 14.6037 24.9655 14.6037 24.8815V21.5815L15.3237 20.8135L17.8437 24.8215C17.9157 24.9415 17.9877 25.0015 18.0837 25.0015H19.5117C19.5957 25.0015 19.6557 24.9295 19.5957 24.8335L16.3677 19.6975L19.1037 16.7695C19.1637 16.6975 19.1517 16.6015 19.0317 16.6015H17.5677C17.4717 16.6015 17.4237 16.6375 17.3517 16.7215L14.6037 19.6975V16.7215C14.6037 16.6375 14.5677 16.6015 14.4837 16.6015H13.2117C13.1277 16.6015 13.0917 16.6375 13.0917 16.7215V24.8815C13.0917 24.9655 13.1277 25.0015 13.2117 25.0015ZM20.288 25.0015H21.596C21.692 25.0015 21.716 24.9655 21.74 24.8815L22.46 22.7815H25.436L26.156 24.8815C26.18 24.9655 26.204 25.0015 26.3 25.0015H27.608C27.728 25.0015 27.776 24.9415 27.728 24.8095L24.776 16.7215C24.752 16.6615 24.704 16.6015 24.596 16.6015H23.3C23.192 16.6015 23.144 16.6615 23.12 16.7215L20.168 24.8095C20.12 24.9415 20.168 25.0015 20.288 25.0015ZM22.94 21.3895L23.948 18.4615L24.956 21.3895H22.94Z"
                    fill="#F6E9D9"
                  />
                </motion.g>
              </motion.g>
            </motion.g>
          </g>
        </>
      );
    default:
      return <></>;
  }
};
