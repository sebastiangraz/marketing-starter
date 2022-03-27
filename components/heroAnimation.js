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

const cursorVariant = {
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
      );
    case "checkReview2":
      return (
        <foreignObject width="100%" height="100%">
          <motion.div
            variants={notificationVariant}
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
                <path d={hero.notificationText1} fill="currentColor" />
              </g>
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
      );
    default:
      return <></>;
  }
};
