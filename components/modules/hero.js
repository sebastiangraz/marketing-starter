import React from "react";

import BlockContent from "../../components/block-content";
import Photo from "../../components/photo";
import { getMaxWidth } from "../../lib/helpers";

const style = {
  hero: {
    display: "grid",
    overflow: "hidden",
    position: "relative",
    minHeight: "50vh",
  },
  heroOverlay: {
    variant: "layout.row",
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gridArea: " 1/-1",
  },
  heroContent: {
    alignContent: "center",
  },
  heroBg: {
    gridArea: " 1/-1",
    "&.is-mobile": {
      display: ["block", "none"],
    },
  },
};

const Hero = ({ data = {} }) => {
  const { content, bgType, photos, maxWidth } = data;

  return (
    <section
      sx={{
        ...style.hero,
        ...(content && {
          color: "#fff",
          "&:before": {
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            zIndex: 2,
            content: `""`,
            background: "#000",
            opacity: 0.4,
          },
        }),
      }}
    >
      {content && (
        <div sx={style.heroOverlay}>
          <div sx={style.heroContent}>
            <BlockContent
              sx={{ maxWidth: getMaxWidth(maxWidth?.value) }}
              blocks={content}
            />
          </div>
        </div>
      )}

      {bgType === "photo" && (
        <>
          {photos?.desktopPhoto && (
            <Photo
              photo={photos.desktopPhoto}
              width={1600}
              srcSizes={[800, 1000, 1200, 1600]}
              sizes="100vw"
              layout="fill"
              sx={style.heroBg}
              className=" is-desktop"
            />
          )}
          {photos?.mobilePhoto && (
            <Photo
              photo={photos.mobilePhoto}
              width={800}
              sizes="100vw"
              layout="fill"
              sx={style.heroBg}
              className=" is-mobile"
            />
          )}
        </>
      )}
    </section>
  );
};

export default Hero;
