import React from "react";
import cx from "classnames";

import Freeform from "../../components/freeform";
import AccordionList from "../../components/accordion-list";

const Grid = ({ data = {} }) => {
  const { size, columns } = data;

  return (
    <section className="section">
      <div sx={{ variant: "layout.row" }}>
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {columns.map((col, key) => {
            const { sizes, blocks } = col;
            return (
              <div
                key={key}
                sx={{
                  width: `calc(100% * (${sizes} / 12))`,
                }}
              >
                {blocks.map((block, key) => (
                  <GridBlock key={key} block={block} />
                ))}
              </div>
            );
          })}
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
    default:
      return null;
  }
};

export default Grid;
