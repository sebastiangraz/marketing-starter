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
      windowHeight: 0,
      elDistanceToTop: 0,
      totalChildWidth: 0,
      elHeight: 0,
      childWidthArray: [],
    }
  );

  const {
    windowHeight,
    elDistanceToTop,
    totalChildWidth,
    elHeight,
    childWidthArray,
  } = state;

  React.useEffect(() => {
    const el = ref && ref.current;

    const onResize = debounce(() => {
      let arr = [];
      const childWidthArray = arr;
      const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
      const elHeight = el.getBoundingClientRect().height;
      const totalChildWidth = [...el.children[0].children].reduce(
        (acc, current) => {
          arr.push(acc);
          current = current.scrollWidth;
          return acc + current;
        },
        0
      );

      setCalc({
        windowHeight: window.innerHeight,
        elDistanceToTop: elDistanceToTop,
        totalChildWidth: totalChildWidth,
        elHeight: elHeight,
        childWidthArray: childWidthArray,
      });
    }, 300);

    document.fonts.ready.then(() => onResize());

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleClick = (e) => {
    const index = parseFloat(e.target.getAttribute("data-index"));
    console.log(e.target);

    return window.scrollTo({
      top: elDistanceToTop + childWidthArray[index],
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const widthOfScrollbar = 6;
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
      height: `calc(${length} * 100vh)`,
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
