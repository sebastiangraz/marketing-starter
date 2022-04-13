import Link from "next/link";
import { Themed, Grid, Flex, Text, Paragraph } from "theme-ui";
import { Author } from "../../components/author";
import Icon from "../../components/icon";
import Layout from "../../components/layout";
import TimeAgo from "react-timeago";
import { getArticles } from "../../data";
import { style } from "../../components/modules/articleList";

const Blog = ({ data }) => {
  const { site, page } = data;

  return (
    <Layout site={site} page={page}>
      <div sx={{ variant: "layout.row", my: 3 }}>
        <Themed.h1>Articles</Themed.h1>

        {page?.posts?.map((article) => {
          const { _id, slug, title, author, name, authorImage, date } = article;

          return (
            <Link
              key={_id}
              passHref
              scroll={false}
              href="/articles/[slug]"
              as={`/articles/${slug?.current}`}
            >
              <Grid sx={style.grid}>
                <Paragraph sx={style.paragraph}>{title}</Paragraph>

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
