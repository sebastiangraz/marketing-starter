import Link from "next/link";
import { Themed } from "theme-ui";
import Layout from "../../components/layout";
import { Width } from "../../components/width";
import { getWhitepapers } from "../../data";

const Blog = ({ data }) => {
  const { site, page } = data;
  console.log(data);
  return (
    <Layout site={site} page={page}>
      <div sx={{ variant: "layout.row", my: 3 }}>
        <Themed.h1>Whitepapers</Themed.h1>
        <ul
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            // gridTemplateColumns: "repeat(auto-fill, minmax(232px, 1fr))",
            padding: "0",
            a: {
              listStyle: "none",
              textDecoration: "none",
              background: "background",
              display: "flex",
              listStyle: "none",
              maskSize: "100% 100%",
              minHeight: "360px",
              padding: "2rem",
              position: "relative",
              boxShadow: " 0 0 0 1px inset",
              mt: "3rem",
              maskImage:
                "linear-gradient(45deg, #000 calc(100% - 44px), transparent calc(100% - 44px))",
              background:
                "linear-gradient(45deg, #0000 calc(100% - 45px), #000 calc(100% - 45px), #000 calc(100% - 44px), #0000 calc(100% - 44px))",
              "&:after": {
                maskImage:
                  "linear-gradient(45deg, #000 calc(100% - 45px), transparent calc(100% - 45px))",
                content: `""`,
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: -1,
                boxShadow: " 0 0 0 1px inset",
                width: "63px",
                height: "63px",
                display: "block",
              },
            },
          }}
        >
          {page?.posts?.map(
            ({ id, title = "", slug = "", publishedAt = "" }) => {
              return (
                slug && (
                  <Width key={id} value={[12, 5, 3]}>
                    <Link
                      passHref
                      scroll={false}
                      href="/whitepapers/[slug]"
                      as={`/whitepapers/${slug.current}`}
                    >
                      <a sx={{ variant: "text.link" }}>
                        <Themed.h4 sx={{ mt: 0, mr: "3rem" }}>
                          {title}
                        </Themed.h4>
                      </a>
                    </Link>
                  </Width>
                )
              );
            }
          )}
        </ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const articlesData = await getWhitepapers({
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
