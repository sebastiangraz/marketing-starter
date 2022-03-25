import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import cx from "classnames";
import { Themed, Text } from "theme-ui";

import Photo from "../components/photo";
import CustomLink from "../components/link";

export const blockSerializers = {
  types: {
    block: (props) => {
      const { markDefs, style = "normal" } = props.node;

      // check if our block contains a button
      const hasButton =
        markDefs &&
        markDefs.some((c) => c._type === "link" && c.isButton === true);

      // build our mock header styles
      if (style === "h1") {
        return (
          <Themed.h1 className={cx("is-h1", { "has-btn": hasButton })}>
            {props.children}
          </Themed.h1>
        );
      }

      if (style === "h2") {
        return <Themed.h2>{props.children}</Themed.h2>;
      }

      if (style === "h3") {
        return (
          <Themed.h3 className={cx("is-h3", { "has-btn": hasButton })}>
            {props.children}
          </Themed.h3>
        );
      }

      if (style === "h4") {
        return (
          <p className={cx("is-h4", { "has-btn": hasButton })}>
            {props.children}
          </p>
        );
      }

      if (style === "normal") {
        return (
          <Themed.p className={cx("is-h4", { "has-btn": hasButton })}>
            {props.children}
          </Themed.p>
        );
      }

      // go through our remaing, true header styles
      if (/^h\d/.test(style)) {
        return React.createElement(
          style,
          { className: hasButton ? "has-btn" : null },
          props.children
        );
      }

      // handle all other blocks with the default serializer
      return BlockContent.defaultSerializers.types.block(props);
    },
    photo: ({ node }) => {
      return <Photo photo={node} />;
    },
    horizontalRule: () => <hr />,
  },
  marks: {
    link: ({ mark, children }) => {
      return <CustomLink link={{ ...mark, ...{ title: children[0] } }} />;
    },
  },
};
