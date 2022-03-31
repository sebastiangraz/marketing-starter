import React from "react";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("./grid"));
const Media = dynamic(() => import("./media"));
const DividerPhoto = dynamic(() => import("./divider-photo"));
const Hero = dynamic(() => import("./hero"));
const Parallax = dynamic(() => import("./parallax"));
const ArticleList = dynamic(() => import("./articleList"));

export const Module = ({ module, articleList }) => {
  const type = module._type;

  switch (type) {
    case "grid":
      return <Grid data={module} />;
    case "media":
      return <Media data={module} />;
    case "dividerPhoto":
      return <DividerPhoto data={module} />;
    case "hero":
      return <Hero data={module} />;
    case "parallax":
      return <Parallax data={module} />;
    case "articleList":
      return <ArticleList data={module} articleList={articleList} />;
    default:
      return null;
  }
};
