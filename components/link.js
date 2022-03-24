import React from "react";
import NextLink from "next/link";
import cx from "classnames";

import { getStaticRoute, getDynamicRoute } from "../lib/routes";

const Link = ({ link, children, ...rest }) => {
  const isLink = link?._type === "navLink";
  const isStatic = getStaticRoute(link.page?.type);

  // External Link
  if (isLink) {
    return (
      <a
        href={link.url}
        target={!link.url.match("^mailto:") ? "_blank" : null}
        rel="noopener noreferrer"
        sx={{
          ...(link.isButton && {
            background: "currentColor",
            color: "#fff",
          }),
        }}
        className={
          link.isButton
            ? cx("btn", link.styles?.style, {
                "is-large": link.styles?.isLarge,
                "is-block": link.styles?.isBlock,
              })
            : null
        }
        {...rest}
      >
        {link.title || children}
      </a>
    );
    // Internal Page
  } else {
    const isDynamic = getDynamicRoute(link.page?.type);
    const isHome = link.page?.isHome;
    const isArticles = link.page?.isArticles;
    return (
      <NextLink
        href={
          isHome
            ? "/"
            : isStatic !== false
            ? `/${isStatic}`
            : `/${isDynamic ? `${isDynamic}/` : ""}${link.page?.slug}`
        }
        scroll={false}
      >
        <a
          sx={{
            ...(link.isButton && {
              padding: 3,
              borderRadius: "default",
              background: "text",
              color: "#fff",
              textDecoration: "none",
            }),
          }}
          className={
            link.isButton
              ? cx("btn", link.styles?.style, {
                  "is-large": link.styles?.isLarge,
                  "is-block": link.styles?.isBlock,
                })
              : null
          }
          {...rest}
        >
          {link.title || children}
        </a>
      </NextLink>
    );
  }
};

export default Link;
