import { sanityClient } from "../../lib/sanity";

const Article = ({ article }) => {
  return (
    <article>
      <h1>{article?.slug?.current}</h1>
      <h1>{article?.title}</h1>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "article" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const article = await sanityClient.fetch(
    `
    *[_type == "article" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      article,
    },
  };
}

export default Article;
