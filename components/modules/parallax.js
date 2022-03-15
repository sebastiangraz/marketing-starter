import React, { useRef, useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  transform,
  useSpring,
} from "framer-motion";
import { useRect } from "@reach/rect";

const Parallax = ({ data = {} }) => {
  const { parallaxContainer } = data;
  const length = parallaxContainer.length;
  const ref = useRef(),
    childRef = useRef();
  const [windowHeight, setWindowHeight] = useState(0);
  const activeNavRect = useRect(ref, { observe: true });
  const childRect = useRect(childRef, { observe: true });
  //   console.log(activeNavRect && -(activeNavRect.top - window.innerHeight));
  const { scrollY } = useViewportScroll();
  const options = {
    // ease: [[0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0]]
  };
  //   const x = useTransform(
  //     scrollY,
  //     [activeNavRect && -(activeNavRect.top - window.innerHeight), 1000 * 3],
  //     ["0px", `-${1000 * length}px`],
  //     options
  //   );

  React.useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const settings = {
    springOptions: {
      damping: 12,
      mass: 0.1,
    },
  };

  const updatePos = (e) => {
    return -Math.max(
      0,
      Math.min(
        -(activeNavRect && activeNavRect.top),
        activeNavRect && activeNavRect.height - windowHeight
      )
    );
  };

  const x = useSpring(
    useTransform(scrollY, (e) => updatePos(e)),
    settings.springOptions
  );

  const style = {
    container: {
      background: "green",
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
      border: "1px solid",
      width: "100vw",
      boxShadow: "20px 20px 20px 20px #0005",
      height: "100vh",
      background: "primary",
    },
    innerSection: {
      overflow: "hidden",
      variant: "layout.row",
    },
  };
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
            x,
          }}
        >
          {parallaxContainer.map((e) => {
            return (
              <div key={e.id} sx={style.section} ref={childRef}>
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
