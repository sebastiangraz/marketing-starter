import { motion } from "framer-motion";
import { path } from "./featureHeroPaths";

const intersectionVariant = {
  hidden: { x1: -1, x2: -2, y1: -1, y2: -2 },
  visible: {
    x1: 2,
    x2: 1,
    y1: 2,
    y2: 2,
    transition: {
      duration: 7,
    },
  },
};

const parentVariant = {
  visible: {
    transition: {
      type: "spring",
      duration: 1.4,
      staggerChildren: 0.03,
    },
  },
};

const childVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: [1, 0],
    transition: {
      pathLength: { type: "spring", duration: 4, bounce: 0 },
      opacity: { delay: 3, duration: 3 },
    },
  },
};

const flowVariant = {
  hidden: { "--offset": "10%", scale: 0 },
  visible: { "--offset": ["10%", "100%"], scale: [0, 1, 1, 1, 1, 0.1] },
};

const labelflowVariant = {
  hidden: { "--offset": "40%", scale: 0.9, opacity: 0 },
  visible: {
    "--offset": ["40%", "90%"],
    scale: [0.9, 1, 1, 1, 1, 0.9],
    opacity: [0, 1, 1, 1, 1, 0],
  },
};

const flowTransition = {
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 1,
  ease: "linear",
  duration: 30,
};

export const FeatureHeroAnimation = ({ id }) => {
  return (
    <motion.svg
      sx={{ display: "block", width: "100%" }}
      viewBox="0 0 1177 924"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        transition={{ ...flowTransition, delay: 0 }}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M448.5 0V503C448.5 518.464 435.964 531 420.5 531H308.5C293.036 531 280.5 543.536 280.5 559V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        transition={{ ...flowTransition, delay: 1 }}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M420.5 0V727.5C420.5 742.964 407.964 755.5 392.5 755.5H252.5C237.036 755.5 224.5 768.036 224.5 783.5V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        transition={{ ...flowTransition, delay: 2 }}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M364.5 0V615.5C364.5 630.964 351.964 643.5 336.5 643.5H140.5C125.036 643.5 112.5 656.036 112.5 671.5V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        transition={{ ...flowTransition, delay: 3 }}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M532.5 0V559.5C532.5 574.964 519.964 587.5 504.5 587.5H476.5C461.036 587.5 448.5 600.036 448.5 615.5V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        transition={{ ...flowTransition, delay: 4 }}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M840.5 0V391.5C840.5 406.964 853.036 419.5 868.5 419.5H1036.5C1051.96 419.5 1064.5 432.036 1064.5 447.5V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        transition={{ ...flowTransition, delay: 5 }}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M868.5 0V727.5C868.5 742.964 881.036 755.5 896.5 755.5H1092.5C1107.96 755.5 1120.5 768.036 1120.5 783.5V924"
          )`,
        }}
      />
      <motion.circle
        r="3"
        x="3"
        y="3"
        fill="currentColor"
        variants={flowVariant}
        transition={{ ...flowTransition, delay: 6 }}
        style={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
          "M420.5 0V727.5C420.5 742.964 407.964 755.5 392.5 755.5H252.5C237.036 755.5 224.5 768.036 224.5 783.5V924"
          )`,
        }}
      />

      <motion.svg
        sx={{ display: "block" }}
        // preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 1177 924"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <motion.linearGradient
            id={`${id}-featureHeroGrad`}
            variants={intersectionVariant}
          >
            <stop offset="0%" stopColor="black" />
            <stop offset="80%" stopColor="white" />
          </motion.linearGradient>
          {/* <mask id={`${id}-featureHeroIntersection`}> */}
          <mask id={`${id}-featureHero`}>
            <rect
              width="100%"
              height="100%"
              fill={`url(#${id}-featureHeroGrad)`}
            />
          </mask>
        </defs>
        <motion.path
          // mask={`url(#${id}-featureHeroIntersection)`}
          mask={`url(#${id}-featureHero)`}
          fillRule="evenodd"
          clipRule="evenodd"
          d={path.intersection}
          fill="currentColor"
        />
      </motion.svg>
      <motion.path
        variants={childVariant}
        d="M280.5 0V475.5C280.5 490.964 267.964 503.5 252.5 503.5H28.5C13.036 503.5 0.5 516.036 0.5 531.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M308.5 0V671.5C308.5 686.964 295.964 699.5 280.5 699.5H0.5"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M336.5 0V559.5C336.5 574.964 323.964 587.5 308.5 587.5H84.5C69.036 587.5 56.5 600.036 56.5 615.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M364.5 0V615.5C364.5 630.964 351.964 643.5 336.5 643.5H140.5C125.036 643.5 112.5 656.036 112.5 671.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M392.5 0V391.5C392.5 406.964 379.964 419.5 364.5 419.5H196.5C181.036 419.5 168.5 432.036 168.5 447.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M420.5 0V727.5C420.5 742.964 407.964 755.5 392.5 755.5H252.5C237.036 755.5 224.5 768.036 224.5 783.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M448.5 0V503C448.5 518.464 435.964 531 420.5 531H308.5C293.036 531 280.5 543.536 280.5 559V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M476.5 0V783.5C476.5 798.964 463.964 811.5 448.5 811.5H364.5C349.036 811.5 336.5 824.036 336.5 839.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M504.5 0V531C504.5 546.464 491.964 559 476.5 559H420.5C405.036 559 392.5 571.536 392.5 587V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M532.5 0V559.5C532.5 574.964 519.964 587.5 504.5 587.5H476.5C461.036 587.5 448.5 600.036 448.5 615.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M560.5 0V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M588.5 0V671.5C588.5 686.964 575.964 699.5 560.5 699.5H532.5C517.036 699.5 504.5 712.036 504.5 727.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M616.5 0V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M644.5 0V727.5C644.5 742.964 631.964 755.5 616.5 755.5V755.5"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M672.5 0V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M700.5 0V615.5C700.5 630.964 713.036 643.5 728.5 643.5H812.5C827.964 643.5 840.5 656.036 840.5 671.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M728.5 0V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M756.5 0V559.5C756.5 574.964 769.036 587.5 784.5 587.5H868.5C883.964 587.5 896.5 600.036 896.5 615.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M784.5 0V447.5C784.5 462.964 797.036 475.5 812.5 475.5H1148.5C1163.96 475.5 1176.5 488.036 1176.5 503.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M812.5 0V503.5C812.5 518.964 825.036 531.5 840.5 531.5H980.5C995.964 531.5 1008.5 544.036 1008.5 559.5V924"
        stroke="currentColor"
      />

      <motion.path
        variants={childVariant}
        d="M840.5 0V391.5C840.5 406.964 853.036 419.5 868.5 419.5H1036.5C1051.96 419.5 1064.5 432.036 1064.5 447.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M868.5 0V727.5C868.5 742.964 881.036 755.5 896.5 755.5H1092.5C1107.96 755.5 1120.5 768.036 1120.5 783.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={childVariant}
        d="M896.5 0V475.5C896.5 490.964 909.036 503.5 924.5 503.5H1176.5"
        stroke="currentColor"
      />
      <motion.path
        variants={{
          ...childVariant,
          visible: {
            pathLength: 1,
            opacity: [1, 0],
            transition: {
              pathLength: { duration: 7.5, delay: 0 },
              opacity: { delay: 3, duration: 3 },
            },
          },
        }}
        d="M952.5 0V587.51M924.5 0V559.5C924.5 574.964 937.036 587.5 952.5 587.5V587.5V924"
        stroke="currentColor"
      />
      <motion.path
        variants={{
          ...childVariant,
          visible: {
            pathLength: 1,
            opacity: [1, 0],
            transition: {
              pathLength: { duration: 2.5, delay: 2 },
              opacity: { delay: 3, duration: 3 },
            },
          },
        }}
        d="M728.5 699.5H756.5C771.964 699.5 784.5 712.036 784.5 727.5V924"
        stroke="currentColor"
      />
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        transition={{ ...flowTransition, delay: 0 }}
        sx={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
              "M448.5 0V503C448.5 518.464 435.964 531 420.5 531H308.5C293.036 531 280.5 543.536 280.5 559V924"
              )`,
        }}
      >
        <rect
          width="106"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path
          transform="translate(14,8)"
          d="M3.38605 10C6.63405 10 8.32805 7.648 8.32805 5.1C8.32805 2.552 6.63405 0.199999 3.38605 0.199999H0.0680474V10H3.38605ZM1.67805 1.642H3.24605C5.64005 1.642 6.67605 3.35 6.67605 5.1C6.67605 6.85 5.64005 8.558 3.24605 8.558H1.67805V1.642ZM12.3084 10.168C13.1064 10.168 14.0024 9.776 14.4084 9.118V10H15.9204V3.476H14.4084V4.358C14.0024 3.7 13.2184 3.308 12.3504 3.308C10.3204 3.308 9.10242 4.82 9.10242 6.738C9.10242 8.656 10.2084 10.168 12.3084 10.168ZM12.5324 8.81C11.3424 8.81 10.6284 7.928 10.6284 6.738C10.6284 5.548 11.3424 4.666 12.5324 4.666C13.8344 4.666 14.4644 5.618 14.4644 6.738C14.4644 7.858 13.8344 8.81 12.5324 8.81ZM20.6916 8.712C20.0896 8.712 19.7396 8.572 19.7396 7.438V4.75H21.2376V3.476H19.7396V1.502H18.2136V3.476H17.1076V4.75H18.2136V7.788C18.2136 9.986 19.5856 10.084 20.3276 10.084C20.7756 10.084 21.2236 10.042 21.4616 10V8.656C21.3076 8.684 20.9296 8.712 20.6916 8.712ZM25.3722 10.168C26.1702 10.168 27.0662 9.776 27.4722 9.118V10H28.9842V3.476H27.4722V4.358C27.0662 3.7 26.2822 3.308 25.4142 3.308C23.3842 3.308 22.1662 4.82 22.1662 6.738C22.1662 8.656 23.2722 10.168 25.3722 10.168ZM25.5962 8.81C24.4062 8.81 23.6922 7.928 23.6922 6.738C23.6922 5.548 24.4062 4.666 25.5962 4.666C26.8982 4.666 27.5282 5.618 27.5282 6.738C27.5282 7.858 26.8982 8.81 25.5962 8.81ZM37.8153 3.308C36.8493 3.308 36.0933 3.686 35.6873 4.386V0.199999H34.1613V10H35.6873V6.416C35.6873 5.268 36.2473 4.61 37.2413 4.61C38.3053 4.61 38.6693 5.212 38.6693 6.598V10H40.1953V5.898C40.1953 4.19 39.3833 3.308 37.8153 3.308ZM42.707 2.538C43.379 2.538 43.841 2.034 43.841 1.404C43.841 0.773999 43.379 0.269999 42.707 0.269999C42.035 0.269999 41.573 0.773999 41.573 1.404C41.573 2.034 42.035 2.538 42.707 2.538ZM43.463 10V3.476H41.951V10H43.463ZM47.5657 10.168C49.1477 10.168 50.1417 9.412 50.1417 8.138C50.1417 7.214 49.5537 6.542 48.6297 6.276L47.3277 5.898C46.7257 5.73 46.5157 5.492 46.5157 5.142C46.5157 4.75 46.9077 4.47 47.4537 4.47C48.1677 4.47 48.5877 4.792 48.5877 5.338H50.0857C50.0857 4.078 49.1057 3.308 47.5097 3.308C46.0537 3.308 45.0037 4.12 45.0037 5.226C45.0037 6.15 45.5217 6.808 46.4317 7.06L47.7337 7.41C48.4337 7.592 48.5877 7.816 48.5877 8.18C48.5877 8.642 48.2237 8.95 47.6497 8.95C46.8657 8.95 46.3197 8.558 46.3197 7.998H44.7937C44.7937 9.244 45.9697 10.168 47.5657 10.168ZM54.3594 8.712C53.7574 8.712 53.4074 8.572 53.4074 7.438V4.75H54.9054V3.476H53.4074V1.502H51.8814V3.476H50.7754V4.75H51.8814V7.788C51.8814 9.986 53.2534 10.084 53.9954 10.084C54.4434 10.084 54.8914 10.042 55.1294 10V8.656C54.9754 8.684 54.5974 8.712 54.3594 8.712ZM59.278 10.168C61.434 10.168 62.722 8.656 62.722 6.738C62.722 4.82 61.434 3.308 59.278 3.308C57.122 3.308 55.834 4.82 55.834 6.738C55.834 8.656 57.122 10.168 59.278 10.168ZM59.278 8.81C58.046 8.81 57.36 7.928 57.36 6.738C57.36 5.548 58.046 4.666 59.278 4.666C60.51 4.666 61.196 5.548 61.196 6.738C61.196 7.928 60.51 8.81 59.278 8.81ZM65.5713 10V7.116C65.5713 5.632 66.2293 4.82 67.3073 4.82C67.5453 4.82 67.6713 4.82 67.9093 4.848V3.448C67.7413 3.406 67.5453 3.392 67.3073 3.392C66.5933 3.392 65.8093 3.812 65.5713 4.736V3.476H64.0453V10H65.5713ZM73.4703 6.85C73.4703 7.97 72.9663 8.824 71.9023 8.824C70.8103 8.824 70.4883 8.096 70.4883 7.13V3.476H68.9623V7.452C68.9623 9.02 69.7603 10.168 71.3703 10.168C72.3363 10.168 73.0643 9.79 73.4703 9.09V9.916C73.4703 11.302 72.8123 11.848 71.9023 11.848C70.9223 11.848 70.5723 11.456 70.5023 10.742H68.9623C68.9763 11.456 69.2283 12.03 69.6903 12.436C70.2083 12.87 70.9643 13.108 71.9303 13.108C72.8543 13.108 73.6103 12.842 74.1423 12.352C74.6883 11.82 74.9963 11.05 74.9963 10.028V3.476H73.4703V6.85Z"
          fill="#D1B9F7"
        />
      </motion.g>
      <motion.g
        x="400"
        y="400"
        variants={labelflowVariant}
        transition={{ ...flowTransition, delay: 0 }}
        sx={{
          offsetDistance: "var(--offset)",
          offsetRotate: "0deg",
          offsetPath: `path(
              "M868.5 0V727.5C868.5 742.964 881.036 755.5 896.5 755.5H1092.5C1107.96 755.5 1120.5 768.036 1120.5 783.5V924"
              )`,
        }}
      >
        <rect
          width="118"
          height="26"
          stroke="currentColor"
          fill="var(--theme-ui-colors-text)"
          ry="13"
        ></rect>

        <path
          transform="translate(14,8)"
          d="M2.06316 10V6.192H6.10916V4.75H2.06316V1.642H6.10916V0.199999H0.453164V10H2.06316ZM8.40932 2.538C9.08132 2.538 9.54332 2.034 9.54332 1.404C9.54332 0.773999 9.08132 0.269999 8.40932 0.269999C7.73732 0.269999 7.27532 0.773999 7.27532 1.404C7.27532 2.034 7.73732 2.538 8.40932 2.538ZM9.16532 10V3.476H7.65332V10H9.16532ZM12.512 10V6.416C12.512 5.268 13.072 4.61 14.066 4.61C15.13 4.61 15.494 5.212 15.494 6.598V10H17.02V5.898C17.02 4.19 16.208 3.308 14.64 3.308C13.674 3.308 12.918 3.686 12.512 4.386V3.476H10.986V10H12.512ZM21.4917 10.168C22.2897 10.168 23.1857 9.776 23.5917 9.118V10H25.1037V3.476H23.5917V4.358C23.1857 3.7 22.4017 3.308 21.5337 3.308C19.5037 3.308 18.2857 4.82 18.2857 6.738C18.2857 8.656 19.3917 10.168 21.4917 10.168ZM21.7157 8.81C20.5257 8.81 19.8117 7.928 19.8117 6.738C19.8117 5.548 20.5257 4.666 21.7157 4.666C23.0177 4.666 23.6477 5.618 23.6477 6.738C23.6477 7.858 23.0177 8.81 21.7157 8.81ZM28.4468 10V6.416C28.4468 5.268 29.0068 4.61 30.0008 4.61C31.0648 4.61 31.4288 5.212 31.4288 6.598V10H32.9548V5.898C32.9548 4.19 32.1428 3.308 30.5748 3.308C29.6088 3.308 28.8528 3.686 28.4468 4.386V3.476H26.9208V10H28.4468ZM37.4685 10.168C39.2885 10.168 40.4225 9.202 40.5625 7.746H39.0365C38.8685 8.432 38.3925 8.81 37.4685 8.81C36.3905 8.81 35.7465 8.068 35.7465 6.738C35.7465 5.408 36.3905 4.666 37.4685 4.666C38.3925 4.666 38.8685 5.058 39.0365 5.8H40.5625C40.4225 4.302 39.2885 3.308 37.4685 3.308C35.4385 3.308 34.2205 4.708 34.2205 6.738C34.2205 8.768 35.4385 10.168 37.4685 10.168ZM42.6546 2.538C43.3266 2.538 43.7886 2.034 43.7886 1.404C43.7886 0.773999 43.3266 0.269999 42.6546 0.269999C41.9826 0.269999 41.5206 0.773999 41.5206 1.404C41.5206 2.034 41.9826 2.538 42.6546 2.538ZM43.4106 10V3.476H41.8986V10H43.4106ZM47.9473 10.168C48.7453 10.168 49.6413 9.776 50.0473 9.118V10H51.5593V3.476H50.0473V4.358C49.6413 3.7 48.8573 3.308 47.9893 3.308C45.9593 3.308 44.7413 4.82 44.7413 6.738C44.7413 8.656 45.8473 10.168 47.9473 10.168ZM48.1713 8.81C46.9813 8.81 46.2673 7.928 46.2673 6.738C46.2673 5.548 46.9813 4.666 48.1713 4.666C49.4733 4.666 50.1033 5.618 50.1033 6.738C50.1033 7.858 49.4733 8.81 48.1713 8.81ZM54.9024 10V0.199999H53.3764V10H54.9024ZM64.8988 4.358C64.4928 3.7 63.7088 3.308 62.8408 3.308C60.8108 3.308 59.5928 4.82 59.5928 6.738C59.5928 8.656 60.6988 10.168 62.7988 10.168C63.5968 10.168 64.4928 9.776 64.8988 9.118V10H66.4108V0.199999H64.8988V4.358ZM63.0228 8.81C61.8328 8.81 61.1188 7.928 61.1188 6.738C61.1188 5.548 61.8328 4.666 63.0228 4.666C64.3248 4.666 64.9548 5.618 64.9548 6.738C64.9548 7.858 64.3248 8.81 63.0228 8.81ZM70.9439 10.168C71.7419 10.168 72.6379 9.776 73.0439 9.118V10H74.5559V3.476H73.0439V4.358C72.6379 3.7 71.8539 3.308 70.9859 3.308C68.9559 3.308 67.7379 4.82 67.7379 6.738C67.7379 8.656 68.8439 10.168 70.9439 10.168ZM71.1679 8.81C69.9779 8.81 69.2639 7.928 69.2639 6.738C69.2639 5.548 69.9779 4.666 71.1679 4.666C72.4699 4.666 73.0999 5.618 73.0999 6.738C73.0999 7.858 72.4699 8.81 71.1679 8.81ZM79.3271 8.712C78.7251 8.712 78.3751 8.572 78.3751 7.438V4.75H79.8731V3.476H78.3751V1.502H76.8491V3.476H75.7431V4.75H76.8491V7.788C76.8491 9.986 78.2211 10.084 78.9631 10.084C79.4111 10.084 79.8591 10.042 80.0971 10V8.656C79.9431 8.684 79.5651 8.712 79.3271 8.712ZM84.0077 10.168C84.8057 10.168 85.7017 9.776 86.1077 9.118V10H87.6197V3.476H86.1077V4.358C85.7017 3.7 84.9177 3.308 84.0497 3.308C82.0197 3.308 80.8017 4.82 80.8017 6.738C80.8017 8.656 81.9077 10.168 84.0077 10.168ZM84.2317 8.81C83.0417 8.81 82.3277 7.928 82.3277 6.738C82.3277 5.548 83.0417 4.666 84.2317 4.666C85.5337 4.666 86.1637 5.618 86.1637 6.738C86.1637 7.858 85.5337 8.81 84.2317 8.81Z"
          fill="#D1B9F7"
        />
      </motion.g>
    </motion.svg>
  );
};
