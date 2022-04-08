import { Flex, Text, Themed } from "theme-ui";
import Reveal from "../reveal";
import { Width } from "../width";
const FeatureHero = ({ data }) => {
  const { header, lead, featureHeader, features } = data;
  return (
    <section>
      <div
        sx={{
          background: "text",
          borderRadius: "6rem",
          color: "purple",
        }}
      >
        <div sx={{ variant: "layout.row", display: "grid" }}>
          <Flex
            sx={{ justifyContent: "space-between", width: "100%", py: "4rem" }}
          >
            <Themed.h1 sx={{ maxWidth: "13ch" }}>{header}</Themed.h1>
            <Width value={[5]}>
              <Themed.h4>{lead}</Themed.h4>
            </Width>
          </Flex>

          <div
            sx={{
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
