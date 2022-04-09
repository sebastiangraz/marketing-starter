import { Flex, Text, Themed } from "theme-ui";
import Reveal from "../../reveal";
import { Width } from "../../width";
import { transparentize } from "@theme-ui/color";
import { FeatureHeroAnimation } from "./featureHeroAnimation";

const FeatureHero = ({ data }) => {
  const { header, lead, featureHeader } = data;

  return (
    <section>
      <div
        sx={{
          background: "text",
          borderRadius: "6rem",
          overflow: "hidden",
          color: "purple",
          position: "relative",
          display: "grid",
        }}
      >
        <div
          sx={{
            variant: "layout.row",
            display: "grid",
            gridArea: "1/-1",
            zIndex: 3,
          }}
        >
          <Flex
            sx={{ justifyContent: "space-between", width: "100%", py: "4rem" }}
          >
            <Themed.h1 sx={{ maxWidth: "13ch" }}>{header}</Themed.h1>
            <Width value={[5]}>
              <Themed.h4>{lead}</Themed.h4>
            </Width>
          </Flex>
        </div>
        <div
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            width: "100%",
            height: "60%",
            background: (t) =>
              `linear-gradient(to bottom, ${transparentize(
                "text",
                0.3
              )(t)} 50%, transparent 90%)`,
          }}
        ></div>
        <div
          sx={{
            variant: "layout.row",
            gridArea: "1/-1",
          }}
        >
          <div
            sx={{
              zIndex: 1,
              position: "relative",
              mx: 2,
            }}
          >
            <FeatureHeroAnimation id={data._key} />
          </div>
          <div
            sx={{
              zIndex: 0,

              mb: "4rem",
              background: "purple",
              borderRadius: "large",
              p: 2,
              color: "text",
            }}
          >
            <Width value={[6]}>
              <Themed.h1>{featureHeader}</Themed.h1>
            </Width>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
