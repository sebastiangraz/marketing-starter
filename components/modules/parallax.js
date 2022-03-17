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
      totalChildHeight: 0,
      windowHeight: 0,
      elDistanceToTop: 0,
      totalChildWidth: 0,
      childWidthArray: [],
      childHeightArray: [],
    }
  );

  const {
    totalChildHeight,
    windowHeight,
    elDistanceToTop,
    totalChildWidth,
    childWidthArray,
    childHeightArray,
  } = state;

  const widthOfScrollbar = 6;

  React.useEffect(() => {
    const el = ref && ref.current;

    const onResize = debounce(() => {
      let widtharr = [];
      let heightarr = [];
      const childWidthArray = widtharr;
      const childHeightArray = heightarr;
      const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
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
        totalChildHeight: totalChildHeight,
        windowHeight: window.innerHeight,
        elDistanceToTop: elDistanceToTop,
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
  }, []);

  const ratio = childWidthArray.map((e, i) => {
    let valueratio = (e / childHeightArray[i]) * window.innerWidth;
    console.log(valueratio);
    return {
      value: isFinite(valueratio) ? valueratio : 0,
    };
  });

  let stored = ratio.map(
    ((acc) => (e) => {
      return (acc += e.value);
    })(0)
  );

  // console.log("stored", stored, "childHArr", childHeightArray);

  const handleClick = (e) => {
    const index = parseFloat(e.target.dataset.index);
    return window.scrollTo({
      top: elDistanceToTop + childHeightArray[index],
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const transformX =
      -totalChildWidth + (window.innerWidth - widthOfScrollbar);

    function updateX(e) {
      const move = transform(
        e,
        [elDistanceToTop, totalChildHeight - windowHeight + elDistanceToTop],
        [0, transformX]
      );
      x.set(move);
    }

    const unsubscribeX = scrollY.onChange((e) => updateX(e));

    return () => {
      unsubscribeX();
    };
  }, [
    elDistanceToTop,
    totalChildHeight,
    scrollY,
    totalChildWidth,
    windowHeight,
    x,
  ]);

  const style = {
    container: {
      height: `${totalChildHeight}px`,
      contain: "paint",
    },
    innerContainer: {
      width: `calc(${length} * 100vw)`,
      display: "flex",
      position: "sticky",
      top: 0,
      bottom: 0,
    },
    section: {
      borderRadius: "3rem",
      width: "80vw",
      height: "100vh",
      maxWidth: "1288px",
      background: "background",
      boxShadow: "0px 0px 0px 1px #000 inset",
      "&:nth-child(2n)": {
        width: "50vw",
      },
    },
    innerSection: {
      py: 5,
      overflow: "hidden",
      variant: "layout.row",
      pointerEvents: "none",
    },
  };

  console.log("render Parallax");

  return (
    <section
      sx={{
        position: "relative",
        maxWidth: "calc(100vw - 6px)",
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
