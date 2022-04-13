import * as React from "react";
import bullet from "../public/listBullet.svg";

export const List = ({ children, ...rest }) => {
  return (
    <ul
      {...rest}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        counterReset: "item",
        "& > li": {
          mt: "0.5rem",
          position: "relative",
          counterIncrement: "item",
          listStyle: "none",
          display: "inline-flex",
          "&:before": {
            flexShrink: 0,
            width: "11px",
            height: "11px",
            right: " 100%",
            mt: "0.4rem",
            mr: "0.5rem",
            content: '""',
            maskPosition: "center",
            maskRepeat: "no-repeat",
            maskImage: `url(${bullet.src})`,
            background: "currentColor",
          },
        },
      }}
    >
      {React.Children.map(children || null, (child, i) => {
        return <li key={i}>{child}</li>;
      })}
    </ul>
  );
};
