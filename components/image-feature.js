import React from "react";

import BlockContent from "./block-content";
import Photo from "../components/photo";
import { Flex, Themed } from "theme-ui";

const ImageFeature = ({ data = {} }) => {
  const { title, content, align, image } = data;
  console.log(data);
  const style = {
    component: {
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
    },
    image: {
      height: "10rem",
      display: "block",
      width: "100%",
      mb: "2rem",
    },
    block: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <>
      <Themed.h4 sx={{ mt: 0 }}>{title}</Themed.h4>
      <Photo
        layout="contain"
        photo={image}
        sx={style.image}
        hasPlaceholder={false}
      />
      <BlockContent sx={style.block} blocks={content} />
    </>
  );
};

export default ImageFeature;
