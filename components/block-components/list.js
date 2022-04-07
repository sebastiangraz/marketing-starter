import React from "react";

export const List = ({ props }) => {
  return (
    <React.Fragment>
      {props.type === "number" ? (
        <ol
          sx={{
            padding: 0,
            counterReset: "item",
            "& > li": {
              mt: "0.5rem",
              position: "relative",
              counterIncrement: "item",
              listStyle: "none",
              display: "table",
              "&:before": {
                right: " 100%",
                opacity: 0.7,
                paddingRight: "0.5em",
                content: 'counters(item, ".") " "',
                display: "table-cell",
              },
            },
          }}
        >
          {props.children}
        </ol>
      ) : (
        <ul
          sx={{
            padding: 0,
            "& > li": {
              mt: "1rem",
              position: "relative",
              listStyle: "none",
              display: "table",
              "ul > li:before": {
                content: `"◦"`,
              },
              "ul > li > ul > li:before": {
                content: `"▪"`,
              },
              "ul > li > ul > li > ul > li:before": {
                content: `"▫"`,
              },
              "&:before": {
                transform: "translateY(0)",
                right: "100%",
                fontWeight: 800,
                paddingRight: "0.5rem",
                content: `"•"`,
                display: "table-cell",
              },
            },
          }}
        >
          {props.children}
        </ul>
      )}
    </React.Fragment>
  );
};
