import { Themed, Flex, Button, Text, Heading, Paragraph } from "theme-ui";
import { Width } from "../../width";
import NextLink from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { HeroAnimation } from "./heroAnimation";
import cursor from "../../../public/youcursor.png";
import cursor2x from "../../../public/youcursor@2x.png";
import CustomLink from "../../../components/link";

const style = {
  hero: {
    position: "relative",
    overflow: "hidden",
    color: "var(--heroColor)",
  },
  heroInner: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "large",
    justifyContent: "space-between",
    background: "beige",
    variant: "layout.row",
    "&:hover, &:hover button, a": {
      cursor: `-webkit-image-set( url(${cursor.src}) 1x, url(${cursor2x.src}) 2x), auto`,
    },
  },
};

const Hero = ({ data }) => {
  const { header, lead, ticker } = data;

  const parentVariant = {
    visible: {
      transition: {
        type: "spring",
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const notificationStackParentVariant = {
    visible: {
      transition: {
        staggerChildren: 2,
      },
    },
  };

  const notificationStackVariant = {
    visible: {
      y: [-10, 0, 0, 0, 0, 10],
      opacity: [0, 1, 1, 1, 1, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2 * (ticker?.length - 1),
        duration: 2,
        type: "spring",
      },
    },
  };

  return (
    <section
      sx={{
        "--heroColor": "text",
        ...style.hero,
      }}
    >
      <div sx={style.heroInner}>
        <Width sx={{ pl: 4, py: 4, pr: 2, flexShrink: 0 }} value={[12]}>
          <Themed.h1
            sx={{ mt: 0, mb: "5rem", maxWidth: "16ch", width: "100%" }}
          >
            <span>{header} </span>
            {/* test */}
            <motion.div
              sx={{
                display: "inline-grid",
                position: "relative",
                pr: "1ch",
              }}
            >
              <motion.div
                variants={notificationStackParentVariant}
                animate="visible"
                sx={{
                  display: "inline-grid",
                  position: "relative",
                }}
              >
                {ticker?.map((e, i) => {
                  return (
                    <motion.div
                      variants={notificationStackVariant}
                      sx={{
                        display: "inline-flex",
                        background: "beige",
                        position: "relative",
                        gridArea: "-1/1",
                        minWidth: "100%",
                        height: "100%",
                      }}
                      key={e + i}
                    >
                      <span
                        sx={{
                          boxShadow: "0 0 0 1px currentColor",
                          borderRadius: "small",
                          pt: "0.25rem",
                          pb: "0.45rem",
                          px: ".5rem",
                        }}
                      >
                        {" "}
                        {e}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </Themed.h1>
          <Paragraph sx={{ mb: "3rem", width: "20ch" }}>{lead}</Paragraph>

          <Flex
            sx={{
              gap: "1rem",
              zIndex: 1,
              position: "relative",
              flexWrap: "wrap",
            }}
          >
            <Button as={CustomLink} cta link={data.primaryCTA}></Button>
            <Button variant="secondary">Watch the video</Button>
          </Flex>
        </Width>
        <Width
          sx={{
            position: ["relative", null, "absolute"],
            right: [0, null, -8],
            pr: [0, 0, 2],
          }}
          value={[12, 12, 9]}
        >
          <LayoutGroup id={`${data._key}`}>
            <motion.svg
              sx={{ overflow: "visible" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 897.5 1041.5"
              aria-labelledby="hero-"
              className="css-mbumtg-Hero"
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              variants={parentVariant}
            >
              <HeroAnimation id={data._key} loop="introPaths" />
              <HeroAnimation id={data._key} loop="intersectingLines" />

              <HeroAnimation loop="flow-1" />
              <HeroAnimation loop="flow-2" />
              <HeroAnimation loop="flow-3" />
              <HeroAnimation loop="flow-4" />

              <HeroAnimation loop="secondaryCards" />
              <HeroAnimation loop="liquidateCard" />
              <HeroAnimation loop="checkReview" id={data._key} />

              <HeroAnimation loop="globalNotifications" />
              <HeroAnimation loop="liquidate" id={data._key} />
              <HeroAnimation loop="taxManager" />
              <HeroAnimation loop="taxAdvisor" />
              <HeroAnimation loop="offSite" />
            </motion.svg>
          </LayoutGroup>
        </Width>
      </div>
    </section>
  );
};

export default Hero;
