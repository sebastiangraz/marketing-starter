import { Flex, Paragraph, Text, Themed } from "theme-ui";
import Reveal from "../../reveal";
import { Width } from "../../width";
import { transparentize } from "@theme-ui/color";
import { FeatureHeroAnimation } from "./featureHeroAnimation";
import { List } from "../../list";
import React from "react";

const FeatureHero = ({ data }) => {
  const { header, lead, featureHeader, features } = data;

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
              zIndex: 3,
              position: "relative",
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
            <div
              sx={{
                m: 0,
                p: 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              {features.map((feature) => {
                const { featureDescription, featureTitle, listItems, id } =
                  feature;
                return (
                  <div
                    key={id}
                    sx={{
                      boxShadow: `0 0 0 1px var(--theme-ui-colors-text)`,
                      listStyle: "none",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                    }}
                  >
                    <div>
                      <Themed.h4
                        sx={{ maxWidth: "26ch", fontWeight: 500, mb: "1rem" }}
                      >
                        {featureTitle}
                      </Themed.h4>
                      <Paragraph sx={{ maxWidth: "28ch" }}>
                        {featureDescription}
                      </Paragraph>
                    </div>
                    <div sx={{ mt: "2rem", mr: "2rem" }}>
                      <svg
                        width="82"
                        height="82"
                        viewBox="0 0 82 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M40.884 74.8752C40.884 78.1923 38.1767 80.9272 34.8972 80.4294C15.7062 77.516 1 60.9464 1 40.9419C1 21.1111 15.452 4.65575 34.3984 1.53341C37.6964 0.989914 40.444 3.73452 40.4439 7.07694L40.4437 16.0646C40.4436 19.3182 37.7855 21.8844 34.711 22.949C27.2578 25.5296 21.906 32.6107 21.906 40.9417C21.906 49.3803 27.3969 56.5364 35.0008 59.0321C38.1426 60.0633 40.884 62.6529 40.884 65.9596L40.884 74.8752ZM47.9896 80.264C44.6736 80.8543 41.884 78.1005 41.884 74.7324L41.884 65.6693C41.884 62.4692 44.4596 59.9269 47.4659 58.8302C52.7309 56.9095 56.9096 52.7308 58.8303 47.4659C59.927 44.4596 62.4693 41.884 65.6694 41.884H74.7324C78.1004 41.884 80.8543 44.6737 80.2639 47.9896C77.3425 64.3999 64.3998 77.3425 47.9896 80.264ZM40.884 53.5501C40.884 56.5448 38.397 59.0504 35.5395 58.1545C28.2178 55.8588 22.906 49.0206 22.906 40.9417C22.906 33.0997 27.9109 26.4266 34.9007 23.9425C37.8224 22.9041 40.4435 25.4718 40.4434 28.5725C40.4434 31.4695 37.912 33.7564 35.8519 35.7932C34.5244 37.1056 33.7019 38.9278 33.7019 40.9421C33.7019 43.0352 34.59 44.9208 36.0101 46.2427C38.185 48.2673 40.884 50.5786 40.884 53.5501ZM46.0618 46.0618C44.1437 47.9799 41.884 50.1516 41.884 52.8642V53.0488C41.884 56.2595 44.6451 58.8887 47.6269 57.698C52.2108 55.8677 55.8676 52.2109 57.6981 47.6271C58.8888 44.6453 56.2596 41.884 53.0488 41.884H52.8642C50.1516 41.884 47.9799 44.1437 46.0618 46.0618ZM40.884 45.553C40.884 46.4503 40.1397 47.1963 39.2748 46.9571C36.6379 46.2278 34.7019 43.811 34.7019 40.9421C34.7019 38.2929 36.3527 36.0293 38.6817 35.1238C39.5926 34.7696 40.4433 35.5572 40.4432 36.5346C40.4432 37.3541 39.8065 38.017 39.147 38.5034C38.3994 39.0547 37.9144 39.9416 37.9144 40.9417C37.9144 42.0419 38.5013 43.005 39.379 43.5352C40.132 43.99 40.884 44.6733 40.884 45.553ZM42.9697 43.1901C42.4098 43.6954 41.884 44.3301 41.884 45.0843C41.884 46.1512 42.8563 46.9789 43.8041 46.4889C44.9535 45.8946 45.8946 44.9536 46.4889 43.8042C46.979 42.8564 46.1513 41.884 45.0843 41.884C44.3302 41.884 43.6955 42.4097 43.1903 42.9695C43.1206 43.0468 43.0469 43.1204 42.9697 43.1901ZM74.8752 40.884C78.1922 40.884 80.9272 38.177 80.4294 34.8975C77.8409 17.8458 64.4711 4.33471 47.49 1.53418C44.192 0.990273 41.444 3.73481 41.4439 7.07737L41.4437 16.0654C41.4436 19.3187 44.1012 21.885 47.1753 22.9498C52.7713 24.8883 57.1823 29.364 59.0323 35.0007C60.0635 38.1426 62.6531 40.884 65.9599 40.884H74.8752ZM53.5503 40.884C56.545 40.884 59.0506 38.3969 58.1547 35.5394C56.4616 30.1394 52.2976 25.8327 46.9872 23.9439C44.0653 22.9047 41.4435 25.4725 41.4434 28.5737C41.4434 31.4703 43.9738 33.7571 46.0333 35.794C46.1046 35.8645 46.1745 35.9366 46.2429 36.01C48.2675 38.185 50.5788 40.884 53.5503 40.884ZM45.5534 40.884C46.4506 40.884 47.1965 40.1398 46.9574 39.275C46.4311 37.3718 45.0257 35.8336 43.2056 35.1249C42.2945 34.7701 41.4433 35.5579 41.4432 36.5357C41.4432 37.3549 42.0793 38.0178 42.7384 38.5044C43.0581 38.7403 43.3296 39.0377 43.5357 39.379C43.9904 40.1321 44.6737 40.884 45.5534 40.884ZM0 40.9419C0 63.5535 18.3303 81.8838 40.9419 81.8838C63.5534 81.8838 81.8838 63.5535 81.8838 40.9419C81.8838 18.3303 63.5534 3.8147e-05 40.9419 3.8147e-05C18.3303 3.8147e-05 0 18.3303 0 40.9419ZM40.9421 42.9693C39.8222 42.9693 38.9144 42.0616 38.9144 40.9417C38.9144 39.8219 39.8222 38.9141 40.9421 38.9141C42.0619 38.9141 42.9697 39.8219 42.9697 40.9417C42.9697 42.0616 42.0619 42.9693 40.9421 42.9693Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <List sx={{ gridColumn: "span 2" }}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
