import React, { useRef, useState } from "react";
import debounce from "lodash.debounce";
import {
  motion,
  useViewportScroll,
  transform,
  useSpring,
  useMotionValue,
} from "framer-motion";

const Parallax = ({ data = {} }) => {
  const settings = {
    springOptions: {
      damping: 12,
      mass: 0.1,
    },
  };

  const { parallaxContainer } = data;
  const length = parallaxContainer.length;
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const x = useMotionValue(0);
  const xSpring = useSpring(x, settings.springOptions);
  const [state, setCalc] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      speedRegulator: 0,
      totalChildHeight: 0,
      windowHeight: 0,
      windowWidth: 0,
      elDistanceToTop: 0,
      elHeight: 0,
      elWidth: 0,
      totalChildWidth: 0,
      childWidthArray: [],
      childHeightArray: [],
    }
  );

  const {
    speedRegulator,
    totalChildHeight,
    windowHeight,
    windowWidth,
    elDistanceToTop,
    elHeight,
    elWidth,
    totalChildWidth,
    childWidthArray,
    childHeightArray,
  } = state;

  const widthOfScrollbar = 6;

  React.useEffect(() => {
    const el = ref && ref.current;

    const onResize = debounce(() => {
      const speedRegulator = window.innerWidth / window.innerHeight;

      let widtharr = [];
      let heightarr = [];
      const childWidthArray = widtharr;
      const childHeightArray = heightarr;
      const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
      const elHeight = el.getBoundingClientRect().height;
      const elWidth = el.getBoundingClientRect().width;
      const totalChildWidth = [...el.children[0].children].reduce(
        (acc, current) => {
          widtharr.push(acc);
          const { width } = current.getBoundingClientRect();
          return acc + width;
        },
        0
      );
      const totalChildHeight = [...el.children[0].children].reduce(
        (acc, current) => {
          heightarr.push(acc);
          const { height } = current.getBoundingClientRect();
          return acc + height;
        },
        0
      );

      setCalc({
        speedRegulator: speedRegulator,
        totalChildHeight: totalChildHeight,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        elDistanceToTop: elDistanceToTop,
        elHeight: elHeight,
        elWidth: elWidth,
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
  }, [length, speedRegulator]);

  React.useEffect(() => {
    const transformX = -totalChildWidth + elWidth;

    function updateX(e) {
      const move = transform(
        e,
        [elDistanceToTop, elHeight - windowHeight + elDistanceToTop],
        [0, transformX]
      );
      x.set(move);
    }

    const unsubscribeX = scrollY.onChange((e) => updateX(e));

    return () => {
      unsubscribeX();
    };
  }, [elDistanceToTop, elHeight, scrollY, totalChildWidth, windowHeight, x]);

  const handleClick = (e) => {
    const index = parseFloat(e.target.dataset.index);
    const lastIndex = Math.max(length - 1, index);
    const isLastIndex = lastIndex === index;
    const lastItemTernary = isLastIndex
      ? childWidthArray[lastIndex]
      : totalChildWidth - elWidth;

    const ratioFormula =
      (elWidth * (totalChildHeight - windowHeight)) / lastItemTernary / elWidth;

    return window.scrollTo({
      top: elDistanceToTop + childWidthArray[index] * ratioFormula, //test[5].value,
      behavior: "smooth",
    });
  };

  const containerHeight = Math.max(totalChildHeight);

  const style = {
    container: {
      height: `${containerHeight}px`,
      variant: "layout.row",
    },
    innerContainer: {
      // width: `calc(${length} * 100vw)`,
      display: "inline-grid",
      gridAutoFlow: "column",
      position: length === 1 ? "relative" : "sticky",
      top: 0,
      bottom: 0,
      width: "100%",
    },
    section: {
      // width: "100%",
      width: length === 1 ? "100%" : "80vw",
      height: "100vh",
      "&:nth-child(even)": {
        width: "50vw",
      },
      "&:first-of-type": {
        "& > *": {
          ml: 0,
        },
      },
    },
    innerSection: {
      mt: [3, 5],
      ml: [3, 5],
      p: [3, 5],
      borderRadius: "3rem",
      height: (t) => [
        `calc(100% - ${t.sizes[3]}px)`,
        `calc(100% - ${t.sizes[15]}px)`,
      ],
      background: "#F3B29C",
      boxShadow: "0px 0px 0px 1px #000 inset",
      overflow: "hidden",
      pointerEvents: "none",
    },
  };

  const childVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const childVariantInner = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        when: "beforeChildren",
      },
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
      <div sx={style.container} ref={ref}>
        <motion.div
          sx={style.innerContainer}
          style={{
            x: xSpring,
          }}
        >
          {parallaxContainer.map((e, i) => {
            return (
              <motion.div
                key={e.id}
                data-index={i}
                sx={style.section}
                variants={childVariant}
                initial="hidden"
                whileInView="visible"
                onClick={length === 1 ? null : handleClick}
              >
                <motion.div sx={style.innerSection}>
                  <motion.div
                    variants={childVariantInner}
                    whileInView="visible"
                  >
                    {" "}
                    <h2>{e.heading}</h2>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Parallax;
