import { Flex, Paragraph, Button, Themed } from "theme-ui";
import Reveal from "../../reveal";
import { Width } from "../../width";
import { transparentize } from "@theme-ui/color";
import { FeatureHeroAnimation } from "./featureHeroAnimation";
import { List } from "../../list";
import React from "react";
import Photo from "../../photo";
import CustomLink from "../../../components/link";

const FeatureHero = ({ data }) => {
  const { header, lead, featureHeader, features } = data;

  return (
    <section>
      <div
        sx={{
          background: "text",
          borderRadius: ["default", "large", "4rem", "6rem"],
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
          <Reveal
            sx={{
              display: "flex",
              alignSelf: "start",
              flexDirection: ["column", "row"],
              textAlign: ["center", "left"],
              alignItems: ["center", "start"],
              justifyContent: ["center", "space-between"],
              width: "100%",
              pt: ["4rem", "6rem"],
            }}
          >
            <Themed.h1 sx={{ maxWidth: ["13ch"], mr: ["0", "2rem"], mb: 0 }}>
              {header}
            </Themed.h1>
            <Themed.h4
              sx={{ maxWidth: ["26ch", "30ch"], justifySelf: "flex-end" }}
            >
              {lead}
            </Themed.h4>
          </Reveal>
        </div>

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
              display: "flex",
              minHeight: "28rem",
              alignItems: "flex-end",
            }}
          >
            <div
              sx={{
                position: "absolute",
                bottom: 0,
                left: "-56px",
                zIndex: 2,
                width: "calc(100% + 112px)",
                pb: `calc(((924/ 1177) * 100%) + 2px)`,
                background: (t) =>
                  `linear-gradient(to bottom, ${transparentize(
                    "text",
                    0
                  )(t)} 0%, transparent 100%)`,
              }}
            ></div>
            <FeatureHeroAnimation id={data._key} />
          </div>
          <div
            sx={{
              zIndex: 3,
              position: "relative",
              mb: "4rem",
              background: "purple",
              borderRadius: "large",
              p: 2,
              color: "text",
            }}
          >
            <Flex
              sx={{
                flexWrap: "wrap",
                mb: ["2rem", "4rem"],
                justifyContent: "space-between",
                alignItems: "flex-end",
                rowGap: "2rem",
              }}
            >
              <Themed.h1 sx={{ mb: 0, maxWidth: "14ch" }}>
                {featureHeader}
              </Themed.h1>

              {data.primaryCTA && (
                <Button
                  sx={{ placeSelf: "end" }}
                  as={CustomLink}
                  cta
                  link={data.primaryCTA}
                ></Button>
              )}
            </Flex>
            <Reveal
              effect={[
                { opacity: 0, y: -8 },
                { opacity: 1, y: 0 },
              ]}
              childDelay={0.75}
              sx={{
                m: 0,
                p: 0,
                display: "grid",
                gridTemplateColumns: ["1fr", "1fr 1fr"],
                columnGap: 4,
              }}
            >
              {features.map((feature) => {
                const {
                  featureDescription,
                  featureTitle,
                  image,
                  listItems,
                  id,
                } = feature;
                return (
                  <div
                    key={id}
                    sx={{
                      boxShadow: `0 -1px 0 0 var(--theme-ui-colors-text)`,
                      listStyle: "none",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      mb: "5rem",
                    }}
                  >
                    <div sx={{ gridColumn: ["span 2", null, "auto"] }}>
                      <Themed.h4
                        sx={{ maxWidth: "26ch", fontWeight: 500, mb: "1rem" }}
                      >
                        {featureTitle}
                      </Themed.h4>
                      <Paragraph sx={{ maxWidth: "32ch", mr: ["2rem"] }}>
                        {featureDescription}
                      </Paragraph>
                    </div>

                    <Photo
                      layout="contain"
                      photo={image}
                      hasPlaceholder={false}
                      sx={{
                        height: ["5rem", null, "5rem"],
                        width: ["7.5rem", null, "7.5rem"],
                        mb: ["0", null, "2rem"],
                        mt: ["0", null, "1.5rem"],
                        display: "block",
                      }}
                    />

                    <List
                      sx={{
                        gridColumn: "span 2",
                        maxWidth: ["100%"],
                      }}
                    >
                      {listItems.featureList.map((item) => {
                        const { id, string } = item;
                        return (
                          <Paragraph variant="label" key={id}>
                            {string}
                          </Paragraph>
                        );
                      })}
                    </List>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
