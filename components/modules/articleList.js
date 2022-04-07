import { tint, darken } from "@theme-ui/color";
import { Themed, Flex, Text, Avatar, Box, Grid, Paragraph } from "theme-ui";
import Link from "next/link";
import { Reveal } from "../../components/reveal";
import imageUrlBuilder from "@sanity/image-url";
import TimeAgo from "react-timeago";

import { sanityClient } from "../../lib/sanity";
import Icon from "../icon";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

const getInitials = (name) =>
  name
    .replace(/[^A-Za-z0-9À-ÿ ]/gi, "") // taking care of accented characters as well
    .replace(/ +/gi, " ") // replace multiple spaces to one
    .split(/ /) // break the name into parts
    .reduce((acc, item) => acc + item[0], "") // assemble an abbreviation from the parts
    .concat(name.substr(1)) // what if the name consist only one part
    .concat(name) // what if the name is only one character
    .substr(0, 2) // get the first two characters an initials
    .toUpperCase();

const ArticleList = ({ data, articleList }) => {
  const { header, limit } = data;
  return (
    <section className="section" sx={{ position: "relative" }}>
      <div sx={{ variant: "layout.row" }}>
        <Themed.h1>{header}</Themed.h1>
        <Flex sx={{ flexDirection: "column" }}>
          <Reveal
            effect={[
              { opacity: 0, x: -5 },
              { opacity: 1, x: 0 },
            ]}
          >
            {articleList.slice(0, limit ? limit : 5).map((article) => {
              const { _id, slug, title, author, name, authorImage, date } =
                article;
              return (
                <Link
                  key={_id}
                  scroll={false}
                  passHref
                  href="/articles/[slug]"
                  as={`/articles/${slug}`}
                >
                  <Grid
                    sx={{
                      gridTemplateColumns: "1fr minmax(max-content, 0.75fr)",
                      py: "1rem",
                      px: "1.5rem",
                      boxShadow: (t) =>
                        `0 1px 0 0 ${tint("text", 0.1)(t)} inset`,
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition:
                        ".8s cubic-bezier(.22,1,.36,1) background, .8s cubic-bezier(.22,1,.36,1) box-shadow",
                      "&:hover": {
                        background: (t) => `${tint("text", 0.91)(t)}`,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Paragraph
                      sx={{
                        whiteSpace: ["normal", null, "nowrap"],
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        m: 0,
                      }}
                    >
                      {title}
                    </Paragraph>

                    <Flex
                      sx={{
                        display: "flex",

                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <Flex
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        {author && (
                          <>
                            <Box
                              sx={{
                                overflow: "hidden",
                                flexShrink: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 0 0 1px currentColor",
                                width: "2rem",
                                height: "2rem",
                                padding: "3px",
                                borderRadius: "pill",
                              }}
                            >
                              <Flex>
                                {authorImage ? (
                                  <Avatar
                                    sx={{
                                      objectFit: "cover",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                    src={urlFor(authorImage.asset).width(100)}
                                  />
                                ) : (
                                  <Text sx={{ m: 0 }}>
                                    {name && getInitials(name)}
                                  </Text>
                                )}
                              </Flex>
                            </Box>

                            <Text
                              variant="label"
                              sx={{ wordBreak: "break-word" }}
                            >
                              {name}
                            </Text>
                          </>
                        )}
                      </Flex>
                      <Text
                        variant="label"
                        sx={{
                          display: ["none", null, "block"],
                          lineHeight: "1.1",
                          whiteSpace: "pre",
                        }}
                      >
                        {date && (
                          <TimeAgo date={new Date(date).toDateString()} />
                        )}
                      </Text>

                      <Icon sx={{ width: "1rem" }} name="Arrow" />
                    </Flex>
                  </Grid>
                </Link>
              );
            })}
          </Reveal>
        </Flex>
      </div>
    </section>
  );
};

export default ArticleList;
