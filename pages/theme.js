const core = [...Array(14).keys()].map((i) => {
  return (i + 1) * 8;
});

const increment = [...Array(14).keys()].map((i) => {
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

const bp = ["40em", "64em", "120em"];

export default {
  spacing: core,
  sizes: core,
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
    text: "#080505",
    background: "F8F8F7",
    primary: "#DF3B24",
  },
  layout: {
    row: {
      width: "88%",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: `repeat(12, 1fr)`,
    },
    footer: {
      color: "white",
      backgroundColor: "black",
    },
  },
  radii: ["8px", "16px", "24px"],
  styles: {
    "*": { m: 0, p: 0, boxSizing: "border-box" },
    body: {
      lineHeight: 1,
    },
    root: {
      fontSize: `clamp(12px, 1vw + 8px, 18px)`,
      bg: "background",
      letterSpacing: "body",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    link: {
      color: "inherit",
      textDecoration: "underline",
      "&:hover": { textDecoration: "none" },
    },
    "h1,h2,h3,h4": {
      fontFamily: "heading",
      fontWeight: "normal",
      mb: "0.75em",
    },
    h1: {
      lineHeight: 1,
      letterSpacing: "heading",
      fontSize: [5, 5, 6],
    },
    h2: { lineHeight: 1.2, letterSpacing: "heading", fontSize: [3, 4, 5] },
    h3: {
      lineHeight: 1.4,
      letterSpacing: "heading",
      fontSize: [2, 3, 4],
    },
    h4: {
      lineHeight: 1.5,
      letterSpacing: "heading",
      fontSize: [1, 2, 3],
    },
    p: {
      lineHeight: 1.56,
      letterSpacing: "body",
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
      border: 0,
      fontFamily: "inherit",
      background: "none",
      color: "inherit",
      fontSize: "inherit",
    },
  },
};
