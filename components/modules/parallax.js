import React, { useRef, useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  transform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useRect } from "@reach/rect";

const Parallax = ({ data = {} }) => {
  const { parallaxContainer } = data;
  const length = parallaxContainer.length;
  const ref = useRef();
  const [windowHeight, setWindowHeight] = useState(0);
  // const activeNavRect = useRect(ref, { observe: true });

  const { scrollY } = useViewportScroll();

  const settings = {
    springOptions: {
      damping: 12,
      mass: 0.1,
    },
  };

  const x = useMotionValue(0);
  const xSpring = useSpring(x, settings.springOptions);

  React.useEffect(() => {
    const el = ref && ref.current;
    const elDistanceToTop = window.scrollY + el.getBoundingClientRect().top;
    const elHeight = el.getBoundingClientRect().height - windowHeight;
    const elWidth = el.getBoundingClientRect().width;
    const widthOfScrollbar = 6;

    const totalChildWidth = [...el.children[0].children].reduce(
      (acc, current) => {
        current = current.scrollWidth;
        return acc + current;
      },
      0
    );
    console.log(totalChildWidth);
    const transformX =
      -totalChildWidth + (window.innerWidth - widthOfScrollbar);

    function updateX(e) {
      const move = transform(
        e,
        [elDistanceToTop, elHeight + elDistanceToTop],
        [0, transformX]
      );
      x.set(move);
    }
    const unsubscribeX = scrollY.onChange((e) => updateX(e));
    return () => {
      unsubscribeX();
    };
  }, [windowHeight]);

  React.useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const style = {
    container: {
      height: `calc(${length} * 100vh)`,
      contain: "paint",
      background: "#ff0",
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
      width: "1000px",
      height: "100vh",
      background: "text",
    },
    innerSection: {
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
                <div sx={style.innerSection}>{e.heading}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Parallax;
