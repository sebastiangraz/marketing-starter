import React from "react";
import Freeform from "../../components/freeform";
import AccordionList from "../../components/accordion-list";
import ImageFeature from "../../components/image-feature";
import { motion } from "framer-motion";

const Grid = ({ data = {} }) => {
  const { columns, indented } = data;

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const gap = 100 / (1288 / 56);
  const gapmath = (size) => -gap / (12 / size) + gap;

  return (
    <section className="section">
      <div
        sx={{
          variant: "layout.row",
          ...(indented && {
            background: "ui",
            borderRadius: "large",
          }),
        }}
      >
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={parentVariant}
            sx={{
              columnGap: 2,
              gridTemplateColumns: "repeat(12,minmax(0,1fr))",
              display: "grid",
              ...(indented && {
                p: 4,
                columnGap: `calc(100% / ((1288 - 224) / 56))`,
              }),
            }}
          >
            {columns.map((col, key) => {
              const { sizes, blocks } = col;

              return (
                <motion.div
                  data-size={sizes}
                  key={key}
                  variants={childVariant}
                  sx={{
                    // background: "#aaa",
                    gridColumn: `span ${sizes}/span 1`,
                    // width: [
                    //   `calc( 100% * ${12} / 12 - ${gapmath(12)}% )`,
                    //   `calc( 100% * ${6} / 12 - ${gapmath(6)}% )`,
                    //   `calc( 100% * ${sizes} / 12 - ${gapmath(sizes)}% )`,
                    // ],
                  }}
                >
                  {blocks.map((block, key) => (
                    <GridBlock key={key} block={block} />
                  ))}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GridBlock = ({ block }) => {
  const type = block._type;

  switch (type) {
    case "freeform":
      return <Freeform data={block} />;
    case "accordions":
      return <AccordionList data={block} />;
    case "imageFeature":
      return <ImageFeature data={block} />;
    default:
      return null;
  }
};

export default Grid;
