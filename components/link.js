import React from "react";
import NextLink from "next/link";
import cx from "classnames";
import { getStaticRoute, getDynamicRoute } from "../lib/routes";

const Link = ({ link, children, ...rest }) => {
  const isLink = !!link.url;
  const isHighlighted = !!link.highlighted;
  const isStatic = getStaticRoute(link.page?.type);
  console.log(link.title, link.styles);
  // External Link
  if (isLink) {
    return (
      <a
        href={link.url}
        target={!link.url.match("^mailto:") ? "_blank" : null}
        rel="noopener noreferrer"
        sx={{
          variant: "text.link",
          ...(isHighlighted && {
            variant: "text.link.highlighted",
          }),
          ...(link.isButton && {
            variant: "buttons.primary",
            ...(link.styles?.isSmall && {
              px: "0.85rem",
              py: "0.25rem",
              display: "inline",
            }),
            ...(link.styles?.isSecondary && {
              variant: "buttons.secondary",
            }),
          }),
        }}
        {...rest}
      >
        {link.title || children}
      </a>
    );
    // Internal Page
  } else {
    const isDynamic = getDynamicRoute(link.page?.type);
    const isHome = link.page?.isHome;
    const isArticle = link.page?.type === "article";
    return (
      <NextLink
        href={
          isHome
            ? "/"
            : isStatic !== false
            ? `/${isStatic}`
            : `${isArticle ? "/articles" : ""}/${
                isDynamic ? `${isDynamic}/` : ""
              }${link.page?.slug}`
        }
        scroll={false}
      >
        <a
          sx={{
            variant: "text.link",
            ...(link.isButton && {
              variant: "buttons.primary",
              ...(link.styles?.isSmall && {
                px: "0.85rem",
                py: "0.25rem",
                display: "inline",
              }),
              ...(link.styles?.isSecondary && {
                variant: "buttons.secondary",
              }),
            }),
          }}
          {...rest}
        >
          {link.title || children}
        </a>
      </NextLink>
    );
  }
};

export default Link;
