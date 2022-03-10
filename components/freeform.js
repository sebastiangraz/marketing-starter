import React from "react";

import BlockContent from "../components/block-content";

const Freeform = ({ data }) => {
  const { content, maxWidth, textAlign } = data;

  let result;
  switch (maxWidth) {
    case 0:
      result = "100%";
      break;
    case 1:
      result = "22rem";
      break;
    case 2:
      result = "26rem";
      break;
    case 3:
      result = "32rem";
      break;
    default:
      result = "100%";
  }

  return (
    <BlockContent
      sx={{
        maxWidth: result,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: textAlign ? "center" : "flex-start",
      }}
      blocks={content}
    />
  );
};

export default Freeform;
