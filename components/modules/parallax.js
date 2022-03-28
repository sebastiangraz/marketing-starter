import React, { useRef, useReducer, useEffect, useState, memo } from "react";
import debounce from "lodash.debounce";
import {
  motion,
  useViewportScroll,
  transform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { ParallaxCard } from "../parallaxCard";
import { Themed } from "theme-ui";

const Parallax = memo(({ data = {} }) => {
  const settings = {
    springOptions: {
      damping: 12,
      mass: 0.1,
    },
  };

  const [state, setCalc] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      totalChildHeight: 0,
      windowHeight: 0,
      windowWidth: 0,
      elDistanceToTop: 0,
      elHeight: 0,
      elWidth: 0,
      totalChildWidth: 0,
      childWidthArray: [],
    }
  );

  const {
    totalChildHeight,
    windowHeight,
    windowWidth,
    elDistanceToTop,
    elHeight,
    elWidth,
    totalChildWidth,
    childWidthArray,
  } = state;

  const { parallaxContainer } = data;
  const length = parallaxContainer.length;
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const x = useMotionValue(0);
  const activeLine = useMotionValue(0);
  const motionActive = useMotionValue(false);
  const xSpring = useSpring(x, settings.springOptions);

  const gapSize = 56;
  const gap = 100 / (1288 / gapSize);
  const gapmath = (size) => -gap / (12 / size) + gap;
  const gapPercentageAsPixels = (gap * elWidth) / 100;

  const calcColumnSum = parallaxContainer.reduce((curr, prev) => {
    let total = curr + prev?.sizes;
    return total;
  }, 0);
  const columnCountEqualTo12 = calcColumnSum === 12;
  const isSolo = length === 1;
  const [index, setIndex] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const el = ref && ref.current;
    const elChild = el.querySelector(".inner-container");

    const onResize = debounce(() => {
      let widtharr = [];
      let heightarr = [];
      const childWidthArray = widtharr;
      const childHeightArray = heightarr;
      const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
      const elHeight = el.getBoundingClientRect().height;
      const elWidth = el.getBoundingClientRect().width;
      const elChildWidth = elChild.getBoundingClientRect().width;

      const totalChildWidth = [...elChild.children].reduce((acc, current) => {
        widtharr.push(acc);
        const { width } = current.getBoundingClientRect();
        return acc + width + gapPercentageAsPixels;
      }, 0);

      const totalChildHeight = [...elChild.children].reduce((acc, current) => {
        heightarr.push(acc);
        const { height } = current.getBoundingClientRect();
        return acc + height;
      }, 0);

      setCalc({
        totalChildHeight: totalChildHeight,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        elDistanceToTop: elDistanceToTop,
        elHeight: elHeight,
        elWidth: elWidth,
        elChildWidth: elChildWidth,
        totalChildWidth: totalChildWidth,
        childWidthArray: childWidthArray,
        childHeightArray: childHeightArray,
      });
    }, 300);

    document.fonts.ready.then(() => onResize());
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [gapPercentageAsPixels, length, windowHeight]);

  useEffect(() => {
    const transformX = -(totalChildWidth - gapPercentageAsPixels) + elWidth;
    function updateX(e) {
      const move = transform(
        e,
        [elDistanceToTop, elHeight - windowHeight + elDistanceToTop],
        [0, transformX]
      );
      x.set(move);
    }

    function getIndex(scrollDistance) {
      const progress = transform(
        scrollDistance,
        [elDistanceToTop, elHeight - windowHeight + elDistanceToTop],
        [0.25, 0.75]
      );
      const threshold = progress * elWidth;

      const val = childWidthArray.map((e, i) => {
        let getIndex = false;
        if (-e + threshold >= x.get()) {
          getIndex = true;
        }
        if (-childWidthArray[i + 1] + threshold >= x.get()) {
          getIndex = false;
        }
        return getIndex;
      });

      motionActive.set(val);
      activeLine.set(threshold);
    }

    const unSubGetIndexFromScroll = scrollY.onChange((e) => getIndex(e));
    const unsubscribeX = scrollY.onChange((e) => updateX(e));
    return () => {
      unSubGetIndexFromScroll();
      unsubscribeX();
    };
  }, [
    activeLine,
    childWidthArray,
    elDistanceToTop,
    elHeight,
    elWidth,
    gapPercentageAsPixels,
    motionActive,
    scrollY,
    totalChildWidth,
    windowHeight,
    x,
  ]);

  useEffect(() => {
    motionActive.onChange((value) => {
      parallaxContainer.map((e, i) => {
        value[i] && setIndex(i);
      });
    });
  }, [parallaxContainer, motionActive]);

  useEffect(() => {
    setTitle(parallaxContainer[index]?.heading);
  }, [parallaxContainer, index]);

  useEffect(() => setIndex(0), []);

  const handleClick = (e) => {
    const clickIndex = parseFloat(e.target.dataset.index);
    const lastIndex = Math.max(length - 1, clickIndex);
    const isLastIndex = lastIndex === clickIndex;
    const lastItemTernary = isLastIndex
      ? childWidthArray[lastIndex]
      : totalChildWidth - gapPercentageAsPixels - elWidth;
    const ratioFormula = (elHeight - windowHeight) / lastItemTernary;

    return window.scrollTo({
      top: elDistanceToTop + childWidthArray[clickIndex] * ratioFormula,
      behavior: "smooth",
    });
  };
  const explicitWidths = parallaxContainer.map((e) => {
    const val = (100 * e.sizes) / 12 - gapmath(e.sizes);
    return `${val}%`;
  });

  const style = {
    container: {
      height: `${totalChildHeight}px`,
      ...(columnCountEqualTo12 && {
        height: "100%",
      }),
      ...(isSolo && {
        height: "100%",
      }),
      position: "relative",
      variant: "layout.row",
    },
    innerContainer: {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: explicitWidths.join(" "),
      position: isSolo || columnCountEqualTo12 ? "relative" : "sticky",
      top: "0px",
      bottom: "0px",
      columnGap: `${gap}%`,
      width: isSolo && "100%",
    },
  };

  return (
    <section
      sx={{
        position: "relative",
        contain: "paint",
        maxWidth: `calc(100vw)`,
      }}
    >
      {console.log("[[parallax.js rendered]]")}

      <div sx={style.container} ref={ref}>
        <Themed.h1
          sx={{
            position: "sticky",
            top: "10vh",
            pb: "10vh",
            maxWidth: "32rem",
          }}
        >
          {title} · love us for{" "}
        </Themed.h1>
        <motion.div
          className="inner-container"
          sx={style.innerContainer}
          style={{
            x: xSpring,
          }}
        >
          {parallaxContainer.map((e, i) => {
            isSolo ? (e.sizes = 12) : e.sizes;
            return (
              <ParallaxCard
                onClick={handleClick}
                gapWidth={56}
                data={e}
                key={e.id}
                active={index}
                index={i}
                isSolo={isSolo}
                columnCountEqualTo12={columnCountEqualTo12}
              />
            );
          })}
        </motion.div>
        <motion.span
          style={{
            x: activeLine,
          }}
          sx={{
            zIndex: 10,
            position: "absolute",
            width: "1px",
            height: "100%",
            bg: "text",
            left: "0px",
            top: "0px",
          }}
        />
      </div>
    </section>
  );
});

Parallax.displayName = "Parallax";

export default Parallax;
