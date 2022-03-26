import { transparentize } from "@theme-ui/color";

const increment = [...Array(17).keys()].map((i) => {
  return i;
});

const n = 10,
  r = 8,
  f0 = 12;

const typescale = increment.slice(0, n).map((e, i) => {
  let formula = Math.pow(r, e / n) * f0;
  let fixedFormula = formula.toFixed(1);
  let rem = fixedFormula / 16;
  // let px = formulaCleaned;
  return `${rem}rem`;
});

const gapSize = 56;
const gap = 100 / (1288 / gapSize);
const space = [...Array(17).keys()].map((e, i) => {
  return `${(gap * i) / 2}%`;
});

const bp = ["40em", "64em", "100em"];

const scroll = {
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "accentuate",
    borderRadius: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: (t) => `${transparentize("text", 0.8)(t)}`,
    cursor: "pointer",
    borderRadius: "12px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: (t) => `${transparentize("text", 0.7)(t)}`,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  space: space,
  sizes: [0, 8, 14, 20, 28, 40, 56, 84, 96, 112, 132, 168, 200, 256],

  fontSizes: typescale,
  breakpoints: bp,
  letterSpacings: {
    body: "-0.02em",
    heading: "-0.05em",
    caps: "0.002em",
  },

  fonts: {
    body: "Relative, system-ui, sans-serif",
    heading: "RelativeFaux, sans-serif",
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#0C002B",
    background: "F8F8F7",
    primary: "#F3B29C",
  },
  layout: {
    row: {
      width: "88%",
      maxWidth: "1288px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: [`repeat(6, 1fr)`, `repeat(12, 1fr)`],
    },
    post: {
      maxWidth: "65ch",
      p: { mb: 3 },
    },
  },
  radii: { default: "28px", small: "16px", large: "48px" },
  text: {
    default: {
      lineHeight: 1.4,
      letterSpacing: "body",
      fontSize: [2, 2, 2],
    },
  },
  buttons: {
    primary: {
      whiteSpace: "pre",
      fontSize: 3,
      px: "3rem",
      py: "2rem",
      borderRadius: "default",
      background: "text",
      color: "#fff",
      textDecoration: "none",
    },
    secondary: {
      whiteSpace: "pre",
      fontSize: 3,
      px: "3rem",
      py: "2rem",
      borderRadius: "default",
      color: "text",
      background: "#fff",
      textDecoration: "none",
    },
  },
  styles: {
    "*": { boxSizing: "border-box" },
    body: {
      lineHeight: 1,
    },
    root: {
      ...scroll,
      fontSize: `clamp(12px, 1vw + 8px, 18px)`,
      color: "text",
      bg: "background",
      fontWeight: "normal",
      fontFamily: "body",
      letterSpacing: "body",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    link: {
      color: "inherit",
      textDecoration: "underline",
      "&:hover": { textDecoration: "none" },
    },

    h1: {
      fontFamily: "heading",
      fontWeight: "normal",
      mb: "0.75em",
      lineHeight: 1,
      letterSpacing: "heading",
      fontSize: [5, 5, 6],
    },
    h2: {
      lineHeight: 1.2,
      fontWeight: "normal",
      letterSpacing: "heading",
      fontSize: [3, 4, 5],
    },
    h3: {
      lineHeight: 1.3,
      fontWeight: "normal",
      letterSpacing: "heading",
      fontSize: [3, 3, 4],
    },
    h4: {
      lineHeight: 1.36,
      fontWeight: "normal",
      letterSpacing: "heading",
      fontSize: [2, 2, 3],
    },
    p: {
      lineHeight: 1.4,
      letterSpacing: "body",
      fontSize: [2, 2, 2],
    },
    a: {
      variant: "styles.link",
    },
    img: {
      maxWidth: "100%",
    },

    //globals

    buttonReset: {
      appearance: "none",
      letterSpacing: "inherit",
      textAlign: "left",
      border: 0,
      padding: 0,
      fontFamily: "inherit",
      background: "none",
      color: "inherit",
      fontSize: "inherit",
    },
  },
};
