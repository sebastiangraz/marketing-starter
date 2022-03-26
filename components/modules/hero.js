import React from "react";
import { Themed, Flex } from "theme-ui";
import { Width } from "../width";
import Icon from "../icon";
import NextLink from "next/link";

const style = {
  hero: {
    mt: 2,
    position: "relative",
  },
  heroInner: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "large",
    justifyContent: "space-between",
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
        <Width sx={{ pl: 4, py: 4, pr: 2, flexShrink: 0 }} value={[5]}>
          <Themed.h1 sx={{ mt: 0, mb: "5rem" }}>
            {header}
            <span> compliance</span>
          </Themed.h1>
          <Themed.p sx={{ m: 0, mb: "4rem" }}>{lead}</Themed.p>
          <Flex sx={{ gap: 3, zIndex: 1, position: "relative" }}>
            <NextLink href="">
              <a
                sx={{
                  variant: "buttons.primary",
                }}
              >
                Book a Demo
              </a>
            </NextLink>
            <NextLink href="">
              <a
                sx={{
                  variant: "buttons.secondary",
                }}
              >
                Watch a video
              </a>
            </NextLink>
          </Flex>
        </Width>
        <Width sx={{ position: "absolute", right: -6 }} value={[8]}>
          <Icon name="Hero" viewBox="0 0 897.5 618" />
        </Width>
      </div>
    </section>
  );
};

export default Hero;
