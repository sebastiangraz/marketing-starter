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

  const handleClick = (e) => {
    const index = parseFloat(e.target.dataset.index);
    const lastIndex = Math.max(length - 1, index);
    const isLastIndex = lastIndex === index;
    const lastItemTernary = isLastIndex
      ? childWidthArray[lastIndex]
      : totalChildWidth - windowWidth;

    const ratioFormula =
      (windowWidth * (totalChildHeight - windowHeight)) /
      (lastItemTernary + widthOfScrollbar) /
      windowWidth;

    return window.scrollTo({
      top: elDistanceToTop + childWidthArray[index] * ratioFormula, //test[5].value,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const transformX =
      -totalChildWidth + (window.innerWidth - widthOfScrollbar);

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

  const style = {
    container: {
      height: `${totalChildHeight}px`,
      contain: "paint",
    },
    innerContainer: {
      // width: `calc(${length} * 100vw)`,
      display: "inline-grid",
      gridAutoFlow: "column",
      position: "sticky",
      top: 0,
      bottom: 0,
    },
    section: {
      width: "80vw",
      height: "100vh",
      // maxWidth: "1288px",
      "&:nth-child(even)": {
        width: "50vw",
      },
      "&:last-child > *": {
        mr: 5,
      },
    },
    innerSection: {
      mt: 5,
      ml: 5,
      p: 5,
      borderRadius: "3rem",
      height: (t) => `calc(100% - ${t.sizes[16]}px)`,
      background: "background",
      boxShadow: "0px 0px 0px 1px #000 inset",
      overflow: "hidden",
      pointerEvents: "none",
    },
  };

  return (
    <section
      sx={{
        position: "relative",
        maxWidth: `calc(100vw - ${widthOfScrollbar}px)`,
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
              <div
                key={e.id}
                data-index={i}
                sx={style.section}
                onClick={(e) => handleClick(e)}
              >
                <div sx={style.innerSection}>
                  <h2>{e.heading}</h2>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Parallax;
