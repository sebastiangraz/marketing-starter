import { Text, Image, Flex, Grid } from "theme-ui";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../lib/sanity";
import { Width } from "../width";
import { Reveal } from "../reveal";

const Logotypes = ({ data }) => {
  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const { header, logos } = data;

  return (
    <section sx={{ position: "relative" }}>
      <div sx={{ variant: "layout.row", px: "0.5rem" }}>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            rowGap: "1rem",
            columnGap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <Text sx={{ m: 0 }}>{header}</Text>
          <Width value={[12, 12, 7]} sx={{ gap: "1.5rem" }}>
            <Reveal
              sx={{
                width: "100%",
                display: "inline-grid",
                gap: "1rem",
                gridAutoFlow: ["row", "column"],
                gridTemplateColumns: ["auto auto auto auto", "unset"],
                alignItems: "center",
                justifyItems: "center",
                justifyContent: ["space-between", "space-between"],
              }}
            >
              {logos.map((logo) => {
                const { logoImage } = logo;

                return (
                  <Image
                    key={logoImage.asset._ref}
                    alt={"logo"}
                    sx={
                      {
                        // height: "1.7rem",
                        // width: "4.5rem",
                      }
                    }
                    src={urlFor(logoImage.asset).width(100)}
                  />
                );
              })}
            </Reveal>
          </Width>
        </Flex>
      </div>
    </section>
  );
};

export default Logotypes;
