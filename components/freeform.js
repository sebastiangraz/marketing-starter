import React from "react";
import { getMaxWidth } from "../lib/helpers";
import BlockContent from "../components/block-content";

const Freeform = ({ data }) => {
  const { content, maxWidth, textAlign } = data;
  return (
    <BlockContent
      sx={{
        maxWidth: getMaxWidth(maxWidth?.value),
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
