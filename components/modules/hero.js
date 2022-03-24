import React from "react";

const style = {
  hero: {
    position: "relative",
  },
};

const Hero = ({ data }) => {
  const { prop } = data;

  return (
    <section
      sx={{
        ...style.hero,
      }}
    >
      <p>Hero</p>
    </section>
  );
};

export default Hero;
