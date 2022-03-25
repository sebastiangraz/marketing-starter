import React from "react";
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
      {" "}
      <div sx={style.heroInner}>
        <Width sx={{ p: 9 }} value={[8, 5]}>
          <h1 sx={{ m: 0, p: 0 }}>{header}</h1>
          <h1 sx={{ m: 0, p: 0 }}>
            <span>Compliance</span>
          </h1>
          <p>{lead}</p>
        </Width>
      </div>
    </section>
  );
};

export default Hero;
