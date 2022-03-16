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
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useViewportScroll();
  const x = useMotionValue(0);
  const xSpring = useSpring(x, settings.springOptions);

  const [state, setCalc] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      elDistanceToTop: 0,
      totalChildWidth: 0,
      elHeight: 0,
    }
  );

  React.useEffect(() => {
    const el = ref && ref.current;

    const onResize = debounce(() => {
      const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
      const elHeight = el.getBoundingClientRect().height - windowHeight;
      const totalChildWidth = [...el.children[0].children].reduce(
        (acc, current) => {
          current = current.scrollWidth;
          return acc + current;
        },
        0
      );

      setCalc({
        elDistanceToTop: elDistanceToTop,
        totalChildWidth: totalChildWidth,
        elHeight: elHeight,
      });
    }, 300);

    document.fonts.ready.then(function () {
      onResize();
    });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [windowHeight]);

  React.useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  React.useEffect(() => {
    const widthOfScrollbar = 6;
    const transformX =
      -state.totalChildWidth + (window.innerWidth - widthOfScrollbar);

    function updateX(e) {
      const move = transform(
        e,
        [state.elDistanceToTop, state.elHeight + state.elDistanceToTop],
        [0, transformX]
      );
      x.set(move);
    }
    const unsubscribeX = scrollY.onChange((e) => updateX(e));

    return () => {
      unsubscribeX();
    };
  }, [
    scrollY,
    state.elDistanceToTop,
    state.elHeight,
    state.totalChildWidth,
    x,
  ]);

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
      width: "100vw",
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
          {parallaxContainer.map((e) => {
            return (
              <div key={e.id} sx={style.section}>
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
