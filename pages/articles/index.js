import Link from "next/link";
import { Themed } from "theme-ui";
import Layout from "../../components/layout";
import { getStaticPage } from "../../data";

const Blog = ({ data }) => {
  const { site, page } = data;

  return (
    <Layout site={site} page={page}>
      <div sx={{ variant: "layout.row", my: 3 }}>
        <Themed.h1>Articles</Themed.h1>

        {page.map(({ id, title = "", slug = "", publishedAt = "" }) => {
          return (
            slug && (
              <li key={id}>
                <Link
                  scroll={false}
                  href="/articles/[slug]"
                  as={`/articles/${slug.current}`}
                >
                  {title}
                </Link>{" "}
                {/* ({new Date(publishedAt).toDateString()}) */}
              </li>
            )
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const articleData = await getStaticPage(
    `
      *[_type == "article"] {
        "id": _id,
        title,
        slug,
        content[]
      }
    `,
    {
      active: preview,
      token: previewData?.token,
    }
  );

  return {
    props: {
      data: articleData,
    },
  };
}

export default Blog;
