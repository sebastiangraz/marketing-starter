import Link from "next/link";
import Layout from "../../components/layout";
import { getStaticPage } from "../../data";

const Blog = ({ data }) => {
  const { site, page } = data;

  return (
    <Layout site={site} page={page}>
      <div sx={{ variant: "layout.row" }}>
        <h1>Blog</h1>

        {page.map(({ id, title = "", slug = "", publishedAt = "" }) => {
          return (
            slug && (
              <li key={id}>
                <Link
                  scroll={false}
                  href="/product/[slug]"
                  as={`/product/${slug.current}`}
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
  const shopData = await getStaticPage(
    `
      *[_type == "product"] {
        "id": _id,
        title,
        slug,
        modules[]
      }
    `,
    {
      active: preview,
      token: previewData?.token,
    }
  );

  return {
    props: {
      data: shopData,
    },
  };
}

export default Blog;
