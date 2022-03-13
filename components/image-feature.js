import React from "react";

import BlockContent from "./block-content";
import Photo from "../components/photo";
import { Flex } from "theme-ui";

const ImageFeature = ({ data }) => {
  const { title, content, image, align } = data;

  const style = {
    component: {
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
    },
    image: {
      width: "100%",
      maxWidth: "10rem",
      mb: 3,
    },
    block: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <Flex sx={style.component}>
      <Photo
        sx={style.image}
        photo={image}
        width={1600}
        srcSizes={[800, 1000, 1200, 1600]}
        sizes="100vw"
      />
      <h3>{title}</h3>
      <BlockContent sx={style.block} blocks={content} />
    </Flex>
  );
};

export default ImageFeature;
