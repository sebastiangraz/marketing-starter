import { Themed, Flex, Button, Text, Heading, Paragraph } from "theme-ui";
import { Width } from "../../width";
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto",
    flexDirection: "column",
    borderRadius: "large",
    justifyContent: "space-between",
    background: ["beige"],
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
        staggerChildren: 0.05,
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
        "--heroColor": (t) => `${t.colors.text}`,
        ...style.hero,
      }}
    >
      <div sx={style.heroInner}>
        <Themed.h1
          sx={{
            pr: [4, 4, 0],
            pl: [4, 4, 4],
            py: 4,
            m: 0,
            borderBottom: ["1px solid", null, "none"],

            maxWidth: ["100%", "100%", "18ch", "18ch"],
            width: "100%",
            gridArea: "1/1/ span 1 / span 2",
          }}
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
        <Paragraph
          sx={{
            gridArea: "3/1/span 1/span 2",
            ml: [0, 0, 4],
            px: [4, 4, 0],
            mb: ["1rem", "3rem"],
            width: "100%",
            maxWidth: ["100%", "32ch", "22ch", "30ch"],
          }}
        >
          {lead}
        </Paragraph>

        <Flex
          sx={{
            pb: [4, 0, 4, 4],
            pl: 4,
            pr: [4, 8, 0, 0],
            gridArea: [
              "4/1/span 1/span 2",
              "3/2/span 1/span 1",
              "4/1/span 1/span 2",
            ],
            gap: "1rem",
            zIndex: 1,
            position: "relative",
            flexWrap: "wrap",
            placeSelf: ["start", "end", "start"],
            mb: [0, "3rem", 0],
          }}
        >
          <Button as={CustomLink} cta link={data.primaryCTA}></Button>
        </Flex>

        <div
          sx={{
            gridArea: ["2/1/span 1/span 2", null, "1/1/span 1/span 2"],
            maskImage: [
              `linear-gradient(225deg, black 91%, transparent 91%)`,
              null,
              "none",
            ],
            position: ["relative", null, "absolute"],
            ml: [null, null, "43.5%", 20],
            left: ["-30%", 0, null],
            mb: ["-30%", "-10%", null],
            width: ["160%", "100%", "897px", "897px"],
          }}
        >
          <LayoutGroup id={`${data._key}`}>
            <motion.svg
              sx={{ overflow: "visible" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 896.5 727.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={parentVariant}
            >
              <HeroAnimation id={data._key} loop="intersectingLines" />
              <HeroAnimation id={data._key} loop="introPaths" />

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
        </div>
      </div>
    </section>
  );
};

export default Hero;
