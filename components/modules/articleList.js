import { tint } from "@theme-ui/color";
import { Themed, Flex, Text, Avatar, Box, Grid } from "theme-ui";
import Link from "next/link";
import { Width } from "../width";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../lib/sanity";
import TimeAgo from "react-timeago";
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
                      `0 -1px 0 0 ${tint("text", 0.9)(t)} inset, 
                      0 -1px 0 0 ${tint("text", 0.9)(t)}`,
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: ".8s cubic-bezier(.22,1,.36,1) background",
                    "&:hover, &:hover a": {
                      background: (t) => `${tint("text", 0.98)(t)}`,
                      cursor: "pointer",
                      textDecoration: "none",
                    },
                  }}
                >
                  <Themed.h4
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      m: 0,
                    }}
                  >
                    {title}
                  </Themed.h4>

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
                      }}
                    >
                      {author && (
                        <>
                          <Box
                            sx={{
                              flexShrink: 0,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow: "0 0 0 1px currentColor",
                              width: "2.5rem",
                              height: "2.5rem",
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
                                <Text
                                  sx={{
                                    bottom: "1px",
                                    position: "relative",
                                  }}
                                >
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
                        color: tint("text", 0.4),
                        lineHeight: "1.1",
                        whiteSpace: "pre",
                      }}
                    >
                      {date && <TimeAgo date={new Date(date).toDateString()} />}
                    </Text>
                    <Themed.a
                      variant="link"
                      sx={{
                        whiteSpace: "pre",
                        fontFeatureSettings: `"calt" on`,
                      }}
                    >
                      {"Read ->"}
                    </Themed.a>
                  </Flex>
                </Grid>
              </Link>
            );
          })}
        </Flex>
      </div>
    </section>
  );
};

export default ArticleList;
