import Link from "next/link";
import { Themed, Grid, Flex, Text, Button } from "theme-ui";
import { Author } from "../../components/author";
import Icon from "../../components/icon";
import Layout from "../../components/layout";
import TimeAgo from "react-timeago";
import { getArticles } from "../../data";
import { style } from "../../components/modules/articleList";
import Photo from "../../components/photo";

const Blog = ({ data = {} }) => {
  const { site, page } = data;

  return (
    <Layout site={site} page={page}>
      <div sx={{ variant: "layout.row", my: 3 }}>
        <Themed.h1 sx={{ mb: [4, 5], maxWidth: "12ch" }}>
          {page.heading}
        </Themed.h1>

        {page?.posts?.map((article) => {
          const {
            _id,
            slug,
            title,
            image,
            featured,
            author,
            name,
            authorImage,
            date,
          } = article;
          console.log(image);

          return featured ? (
            <Grid
              sx={{
                ...style.grid,
                py: "2rem",
                px: [2, "1.5rem"],
                rowGap: "2rem",
              }}
            >
              <Flex sx={{ flexDirection: "column", order: [1, 0] }}>
                <Flex sx={{ gap: "1rem", alignItems: "center" }}>
                  {author && (
                    <Flex sx={style.author}>
                      <Author name={name} asset={authorImage} />
                    </Flex>
                  )}

                  <Text variant="label" sx={style.date}>
                    {date && <TimeAgo date={new Date(date).toDateString()} />}
                  </Text>
                </Flex>
                <Themed.h2 sx={{ maxWidth: "30rem" }}>{title}</Themed.h2>
                <Link
                  key={_id}
                  passHref
                  scroll={false}
                  href="/articles/[slug]"
                  as={`/articles/${slug?.current}`}
                >
                  <Button>Read</Button>
                </Link>
              </Flex>

              <Flex sx={{ width: "100%", height: "100%" }}>
                <Text
                  variant="small"
                  sx={{
                    background: "background",
                    borderRadius: "pill",

                    py: "0.5rem",
                    px: "1rem",
                    alignSelf: "start",
                    display: "inline-flex",
                    position: "absolute",
                    mt: "1rem",
                    ml: "1rem",
                    zIndex: 2,
                  }}
                >
                  Featured
                </Text>

                <Photo
                  layout="fill"
                  photo={image}
                  sx={{
                    borderRadius: "default",
                    overflow: "hidden",
                    height: ["200px", "100%"],
                    width: "100%",
                  }}
                  hasPlaceholder={false}
                />
              </Flex>
            </Grid>
          ) : (
            <Link
              key={_id}
              passHref
              scroll={false}
              href="/articles/[slug]"
              as={`/articles/${slug?.current}`}
            >
              <a sx={{ textDecoration: "none", color: "inherit" }}>
                <Grid sx={style.grid}>
                  <Themed.h4 sx={{ ...style.paragraph, m: 0 }}>
                    {title}
                  </Themed.h4>

                  <Flex sx={style.metaWrapper}>
                    {author && (
                      <Flex sx={style.author}>
                        <Author name={name} asset={authorImage} />
                      </Flex>
                    )}
                    <Text variant="label" sx={style.date}>
                      {date && <TimeAgo date={new Date(date).toDateString()} />}
                    </Text>
                    <Icon
                      sx={{ width: "0.75rem", display: ["none", "block"] }}
                      name="Arrow"
                    />
                  </Flex>
                </Grid>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const articlesData = await getArticles({
    active: preview,
    token: previewData?.token,
  });

  return {
    props: {
      data: articlesData,
    },
  };
}

export default Blog;
