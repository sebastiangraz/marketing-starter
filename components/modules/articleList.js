import { Themed, Flex } from "theme-ui";
import { sanityClient } from "../../lib/sanity";

const ArticleList = ({ data }) => {
  console.log(data);
  return (
    <section className="section" sx={{ position: "relative" }}>
      <div sx={{ variant: "layout.row" }}>
        <Themed.h1>{data.header}</Themed.h1>
      </div>
    </section>
  );
};

export default ArticleList;
