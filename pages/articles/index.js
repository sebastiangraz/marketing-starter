import Link from "next/link";
import { Themed } from "theme-ui";
import Layout from "../../components/layout";
import { getArticles } from "../../data";

const Blog = ({ data }) => {
  const { site, page } = data;

  return (
    <Layout site={site} page={page}>
      <div sx={{ variant: "layout.row", my: 3 }}>
        <Themed.h1>Articles</Themed.h1>

        {page?.posts?.map(({ id, title = "", slug = "", publishedAt = "" }) => {
          return (
            slug && (
              <li key={id}>
                <Link
                  scroll={false}
                  href="/articles/[slug]"
                  as={`/articles/${slug.current}`}
                >
                  <a sx={{ variant: "text.link" }}>{title}</a>
                </Link>{" "}
              </li>
            )
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
