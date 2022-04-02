import React from "react";

import BlockContent from "./block-content";
import Photo from "../components/photo";
import { Flex, Themed } from "theme-ui";

const ImageFeature = ({ data = {} }) => {
  const { title, content, photo, align } = data;

  const style = {
    component: {
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
    },
    image: {
      display: "block",
      width: "100%",
      maxWidth: "10rem",
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
        sx={style.image}
        photo={photo.photo}
        width={1600}
        layout="contain"
        srcSizes={[800, 1000, 1200, 1600]}
        sizes="100vw"
      />

      <BlockContent sx={style.block} blocks={content} />
    </>
  );
};

export default ImageFeature;
