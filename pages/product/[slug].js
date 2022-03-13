import { sanityClient } from "../../lib/sanity";

const Product = ({ product }) => {
  return (
    <article>
      <h1>{product?.slug?.current}</h1>
      <h1>{product?.title}</h1>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const product = await sanityClient.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      product,
    },
  };
}

export default Product;
