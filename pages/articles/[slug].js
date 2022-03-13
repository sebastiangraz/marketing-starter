import { getAllDocSlugs, getArticle } from "../../data";
import BlockContent from "../../components/block-content";
import Layout from "../../components/layout";
import Reveal from "../../components/reveal";
const Article = ({ data }) => {
  const { page, site } = data;

  return (
    <Layout site={site} page={page}>
      <article sx={{ variant: "layout.row", my: 6 }}>
        <h1>{page?.title}</h1>
        <section sx={{ variant: "layout.post" }}>
          <BlockContent blocks={page?.content} />
        </section>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params, preview, previewData }) {
  const productData = await getArticle(params.slug, {
    active: preview,
    token: previewData?.token,
  });

  return {
    props: {
      data: productData,
    },
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllDocSlugs("article");

  return {
    paths:
      allProducts?.map((page) => {
        return {
          params: {
            slug: page.slug,
          },
        };
      }) || [],
    fallback: false,
  };
}

// export async function getStaticPaths() {
//   const paths = await sanityClient.fetch(
//     `*[_type == "article" && defined(slug.current)][].slug.current`
//   );

//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.params;
//   const article = await sanityClient.fetch(
//     `
//     *[_type == "article" && slug.current == $slug][0]
//   `,
//     { slug }
//   );
//   return {
//     props: {
//       article,
//     },
//   };
// }

export default Article;
