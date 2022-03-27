import { motion } from "framer-motion";
import { hero } from "./icon";

const checkReviewTransition = {
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 4,
  type: "spring",
  duration: 3,
  delay: 4,
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
    transition: { ...checkReviewTransition, delay: 8 },
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
      delay: 8,
    },
  },
};

export const HeroAnimation = ({ loop }) => {
  switch (loop) {
    case "checkReview":
      return (
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
              <path d={hero.notificationText1} fill="currentColor" />
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
            variants={cursorCheckReviewVariant}
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
      );

    case "checkReview2":
      return (
        <foreignObject width="100%" height="100%">
          <motion.div
            variants={liquidateVariant}
            sx={{
              width: "210px",
              top: "420px",
              position: "relative",
              left: "490px",
            }}
          >
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
                height="72"
                rx="18.5"
                fill="white"
                stroke="currentColor"
              />
              <path
                d="M15 23L17 25L21 21"
                stroke="#F6E9D9"
                strokeLinecap="round"
              />
              <g transform="translate(15 15)">
                <path d={hero.notificationText2} fill="currentColor" />
              </g>
              <path
                d="M179.918 13H180.938C181.008 13 181.038 12.97 181.038 12.9V6.1C181.038 6.03 181.008 6 180.938 6H180.378C180.318 6 180.268 6.02 180.218 6.05L178.568 6.94C178.508 6.97 178.458 7.02 178.458 7.09V8.16C178.458 8.23 178.488 8.25 178.538 8.25C178.568 8.25 178.598 8.24 178.638 8.22L179.818 7.56V12.9C179.818 12.97 179.848 13 179.918 13Z"
                fill="#F6E9D9"
              />
            </svg>
          </motion.div>
          <motion.div
            variants={cursorLiquidateVariant}
            xmlns="http://www.w3.org/1999/xhtml"
            sx={{
              position: "absolute",
              top: "30%",
              left: "70%",
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
              <motion.svg
                width="36"
                height="40"
                viewBox="0 0 36 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00959 4.70781L29.9157 13.9043C31.7321 14.5491 31.675 17.1374 29.8319 17.7015L22.4768 19.9526C21.9239 20.1218 21.4713 20.5221 21.2357 21.0502L15.1492 34.6922C14.4173 36.3327 12.0617 36.2515 11.4445 34.5645L1.46227 7.27974C0.880596 5.68984 2.41417 4.14145 4.00959 4.70781Z"
                  fill="#F6E9D9"
                  stroke="#3C1F04"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.40536 1.77049L29.201 11.7141C30.9444 12.4426 30.7985 14.9595 28.9825 15.4816L20.8264 17.8264C20.2475 17.9928 19.7744 18.4114 19.5386 18.9657L14.4345 30.9659C14.0801 31.799 12.8894 31.77 12.5761 30.9207L2.75785 4.30811C2.15311 2.66894 3.79328 1.09685 5.40536 1.77049Z"
                  fill="white"
                  stroke="#3C1F04"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </foreignObject>
      );
    default:
      return <></>;
  }
};
