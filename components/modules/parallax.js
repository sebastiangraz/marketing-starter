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

  const [state, setCalc] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      totalChildHeight: 0,
      windowHeight: 0,
      windowWidth: 0,
      elDistanceToTop: 0,
      elHeight: 0,
      elWidth: 0,
      elChildWidth: 0,
      totalChildWidth: 0,
      childWidthArray: [],
      childHeightArray: [],
    }
  );

  const {
    totalChildHeight,
    windowHeight,
    windowWidth,
    elDistanceToTop,
    elHeight,
    elWidth,
    elChildWidth,
    totalChildWidth,
    childWidthArray,
    childHeightArray,
  } = state;

  const { parallaxContainer } = data;
  const length = parallaxContainer.length;
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const x = useMotionValue(0);
  const xSpring = useSpring(x, settings.springOptions);
  const widthOfScrollbar = 6;
  const gapSize = 56;
  const gapCalc = (length - 1) * 56;
  const calcColumnSum = parallaxContainer.reduce((curr, prev) => {
    let total = curr + prev?.sizes;
    return total;
  }, 0);
  const columnCountEqualTo12 = calcColumnSum === 12;
  const gapmath = (e) => -gapSize / (12 / e) + gapSize;
  const isSolo = length === 1;

  React.useEffect(() => {
    const el = ref && ref.current;
    const elChild = el.children[0];

    const onResize = debounce(() => {
      let widtharr = [];
      let heightarr = [];
      const childWidthArray = widtharr;
      const childHeightArray = heightarr;
      const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
      const elHeight = el.getBoundingClientRect().height;
      const elWidth = el.getBoundingClientRect().width;
      const elChildWidth = elChild.getBoundingClientRect().width;

      const totalChildWidth = [...el.children[0].children].reduce(
        (acc, current) => {
          widtharr.push(acc);
          const { width } = current.getBoundingClientRect();
          return acc + width + gapSize;
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
  }, [length, windowHeight]);

  React.useEffect(() => {
    const transformX = -(totalChildWidth - gapSize) + elWidth;
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
    // const lastIndex = Math.max(length - 1, index);
    // const isLastIndex = lastIndex === index;
    // const lastItemTernary = isLastIndex
    //   ? totalChildWidth - elWidth
    //   : totalChildWidth - elWidth;

    const ratioFormula =
      (windowWidth * (totalChildHeight - windowHeight)) /
      (totalChildWidth - gapSize - elWidth) /
      windowWidth;

    return window.scrollTo({
      top: elDistanceToTop + childWidthArray[index] * ratioFormula, //test[5].value,
      behavior: "smooth",
    });
  };

  const style = {
    container: {
      height: `${totalChildHeight}px`,
      ...(columnCountEqualTo12 && {
        height: "100%",
      }),
      ...(isSolo && {
        height: "100%",
      }),
      variant: "layout.row",
    },
    innerContainer: {
      display: "inline-flex",
      position: isSolo || columnCountEqualTo12 ? "relative" : "sticky",
      top: "0px",
      bottom: "0px",
      columnGap: 6,
      width: isSolo && "100%",
    },
    section: {
      maxWidth: "1288px",
      height: "100vh",
      "&:first-of-type": {
        "& > *": {
          ml: "0px",
        },
      },
    },
    innerSection: {
      mt: [3, 6],
      p: [3, 6],
      gridColumn: "span 12",
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
            isSolo ? (e.sizes = 12) : e.sizes;
            return (
              <motion.div
                key={e.id}
                data-index={i}
                sx={{
                  ...style.section,
                  // width: "720px",
                  width: isSolo
                    ? "100%"
                    : `calc( 1288px * ${
                        e.sizes ? e.sizes : 12
                      } / 12 - ${gapmath(e.sizes)}px )`,
                }}
                variants={childVariant}
                initial="hidden"
                whileInView="visible"
                onClick={isSolo || columnCountEqualTo12 ? null : handleClick}
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
