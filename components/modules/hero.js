import React from "react";
import { Themed } from "theme-ui";
import { Width } from "../width";
const style = {
  hero: {
    mt: 7,
    position: "relative",
  },
  heroInner: {
    borderRadius: "large",
    background: "primary",
    variant: "layout.row",
  },
};

const Hero = ({ data }) => {
  const { header, lead } = data;
  return (
    <section
      sx={{
        ...style.hero,
      }}
    >
      <div sx={style.heroInner}>
        <Width sx={{ p: 9 }} value={[8, 5]}>
          <Themed.h1>{header}</Themed.h1>
          <Themed.h1>
            <span>Compliance</span>
          </Themed.h1>
          <Themed.p sx={{ m: 0 }}>{lead}</Themed.p>
        </Width>
      </div>
    </section>
  );
};

export default Hero;
