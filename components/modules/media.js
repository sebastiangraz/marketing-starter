import React from "react";

import BlockContent from "../block-content";
import Photo from "../photo";
import { getMaxWidth } from "../../lib/helpers";

const style = {
  media: {
    display: "grid",
    overflow: "hidden",
    position: "relative",
  },
  mediaOverlay: {
    variant: "layout.row",
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gridArea: " 1/-1",
  },
  mediaContent: {
    alignContent: "center",
  },
  mediaBg: {
    gridArea: " 1/-1",
    "&.is-mobile": {
      display: ["block", "none"],
    },
  },
};

const Media = ({ data = {} }) => {
  const { content, bgType, photos, maxWidth } = data;
  console.log(content);
  return (
    <section
      sx={{
        ...style.media,
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
        <div sx={style.mediaOverlay}>
          <div sx={style.mediaContent}>
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
              sx={style.mediaBg}
              className=" is-desktop"
            />
          )}
          {photos?.mobilePhoto && (
            <Photo
              photo={photos.mobilePhoto}
              width={800}
              sizes="100vw"
              layout="fill"
              sx={style.mediaBg}
              className=" is-mobile"
            />
          )}
        </>
      )}
    </section>
  );
};

export default Media;
