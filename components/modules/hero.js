import React from "react";

import BlockContent from "../../components/block-content";
import VideoLoop from "../../components/vimeo-loop";
import Photo from "../../components/photo";

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
  const { content, bgType, photos, video } = data;

  return (
    <section sx={style.hero}>
      {content && (
        <div sx={style.heroOverlay}>
          <div sx={style.heroContent}>
            <BlockContent blocks={content} />
          </div>
        </div>
      )}

      {bgType === "video" && (
        <>
          <div sx={style.heroBg} className=" is-desktop">
            <VideoLoop title={video.title} id={video.id} />
          </div>
          <div sx={style.heroBg} className=" is-mobile">
            <VideoLoop title={video.title} id={video.id} />
          </div>
        </>
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
