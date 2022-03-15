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
  const { scrollY } = useViewportScroll();

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
    let max = -(activeNavRect && activeNavRect.height);
    let clamped = -Math.max(
      0,
      Math.min(-(activeNavRect && activeNavRect.top), -max - windowHeight)
    );
    return -transform(clamped, [0, max], [0, length]);
  };

  const x = useSpring(
    useTransform(scrollY, (e) => updatePos(e)),
    settings.springOptions
  );

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
            x: `${x.current * 100}vw`,
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
