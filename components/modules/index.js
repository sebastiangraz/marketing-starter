import React from "react";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("./grid"));
const Media = dynamic(() => import("./media"));
const DividerPhoto = dynamic(() => import("./divider-photo"));
const Parallax = dynamic(() => import("./parallax"));

export const Module = ({ module }) => {
  const type = module._type;

  switch (type) {
    case "grid":
      return <Grid data={module} />;
    case "media":
      return <Media data={module} />;
    case "dividerPhoto":
      return <DividerPhoto data={module} />;
    case "parallax":
      return <Parallax data={module} />;
    default:
      return null;
  }
};
