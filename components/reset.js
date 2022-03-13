// styles/Reset.tsx
import { css, Global, GlobalProps } from "@emotion/react";

export function Reset(props) {
  return (
    <Global
      {...props}
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        @font-face {
          font-family: "RelativeFaux";
          font-weight: normal;
          font-style: normal;
          font-display: swap;
          src: url("/fonts/relativefaux.woff") format("woff"),
            url("/fonts/relativefaux.woff2") format("woff2");
        }

        @font-face {
          font-family: "Relative";
          font-weight: normal;
          font-style: normal;
          font-display: swap;
          src: url("/fonts/relative.woff") format("woff"),
            url("/fonts/relative.woff2") format("woff2");
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
}
