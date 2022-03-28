/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { useIntersection } from "use-intersection";
import cx from "classnames";

import { buildSrcSet, buildSrc } from "../lib/helpers";

const Photo = ({
  photo,
  width,
  height,
  srcSizes = [400, 600, 800, 1000, 1200],
  sizes = "(min-width: 940px) 50vw, 100vw",
  layout = "intrinsic",
  quality = 90,
  hasPlaceholder = true,
  forceLoad,
  onLoad,
  className,
}) => {
  const style = {
    ar: {
      overflow: "hidden",
      position: "relative",
      "&.has-fill": {
        bottom: "0px",
        left: "0px",
        right: "0px",
        top: "0px",
        position: "absolute",
      },
    },
    img: {
      position: "absolute",
      display: "block",
      height: "calc(100%)",
      left: "50%",
      opacity: "0",
      top: "50%",
      transform: "translate3d(-50%,-50%,0)",
      transition: "opacity .4s linear",
      width: "calc(100%)",
      zIndex: "1",
      "&.is-loaded": {
        opacity: 1,
      },
      "&.object-cover": {
        objectFit: "cover",
      },
    },
    placeholder: {
      bottom: "0",
      // filter: "grayscale(1)",
      left: "0",
      position: "absolute",
      right: "0",
      top: "0",
      transform: "scale(1.15)",
      transition: "opacity 0s linear .4s",
      "&.is-loaded": {
        opacity: 0,
      },
      img: {
        opacity: 1,
      },
    },
  };

  const imageRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const isIntersecting = useIntersection(imageRef, {
    once: true,
    threshold: 0.1,
  });

  // define our aspect ratio if not a background fill
  const aspect =
    typeof width === "number" && typeof height === "number"
      ? (height / width) * 100
      : 100 / (photo.customRatio || photo.aspectRatio);

  const aspectCustom =
    layout === "intrinsic" ? { paddingTop: `${aspect}%` } : null;

  // define our src and srcset
  const src = buildSrc(photo, {
    ...{ width },
    ...{ height },
    ...{ quality },
  });

  const srcset = buildSrcSet(photo, {
    ...{ srcSizes },
    ...{ aspect },
    ...{ quality },
  });

  // handle our image onLoad
  function handleLoad() {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }

  // trigger any onLoad callbacks
  useEffect(() => {
    if (isLoaded && onLoad) onLoad();
  }, [isLoaded, onLoad]);

  if (!photo?.asset) return null;

  return (
    <figure sx={{ margin: "0px" }}>
      <div sx={style.ar} style={aspectCustom}>
        <picture>
          <img
            sx={style.img}
            ref={imageRef}
            width={width}
            height={height}
            src={forceLoad || isIntersecting ? src : null}
            srcSet={forceLoad || isIntersecting ? srcset : null}
            sizes={sizes}
            decoding="async"
            onLoad={handleLoad}
            alt={photo.alt || photo.asset?.altText}
            className={cx(getSize(layout), { "is-loaded": isLoaded })}
          />
        </picture>

        {hasPlaceholder && (
          <div sx={style.placeholder} className={isLoaded ? "is-loaded" : ""}>
            <img sx={style.img} src={photo.lqip} alt="" role="presentation" />
          </div>
        )}
      </div>
    </figure>
  );
};

const getSize = (layout) => {
  switch (layout) {
    case "intrinsic":
      return "object-cover";
    case "fill":
      return "object-cover";
    case "contain":
      return "object-contain";
  }
};

export default Photo;
