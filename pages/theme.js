const core = [...Array(14).keys()].map((i) => {
  return (i + 1) * 8
})
const bp = ['40em', '64em', '120em']

const typescale = core.map((i) => {
  return `${i / 20}em`
})

export default {
  spacing: core,
  sizes: core,
  fontSizes: typescale,
  breakpoints: bp,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: 'beige',
    primary: '#33e',
  },
  layout: {
    row: {
      width: '88%',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footer: {
      color: 'white',
      backgroundColor: 'black',
    },
  },
  radii: ['8px', '16px', '24px'],
  styles: {
    root: {
      fontSize: `clamp(12px, 1vw + 8px, 20px)`,
      bg: 'background',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: 'monospace',
    },
    link: {
      color: 'inherit',
      textDecoration: 'underline',
      '&:hover': { textDecoration: 'none' },
    },
    h1: {
      lineHeight: 1,
      letterSpacing: '-0.02em',
      fontSize: [5, 5, 6],
    },
    h2: { lineHeight: 1.2, letterSpacing: '-0.016em', fontSize: [3, 4, 5] },
    h3: {
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      fontSize: [2, 3, 4],
    },
    h4: {
      lineHeight: 1.5,
      fontSize: [1, 2, 3],
    },
    p: {
      lineHeight: 1.56,
    },
    a: {
      variant: 'styles.link',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
