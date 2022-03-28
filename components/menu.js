import React from "react";
import { useRouter } from "next/router";

import { getStaticRoute, getActive } from "../lib/routes";

import Dropdown from "../components/menu-dropdown";
import CustomLink from "../components/link";

const style = {
  ul: {
    padding: "0px",
    margin: 0,
    position: "relative",
    display: "inline-flex",
    listStyle: "none",
    "> * + * ": {
      pl: 5,
    },
  },
};

const Menu = ({ items, hasFocus = true, onClick, ...rest }) => {
  const router = useRouter();

  if (!items) return null;

  return (
    <ul {...rest} sx={style.ul}>
      {items.map((item, key) => {
        const isDropdown = !!item.dropdownItems;
        const isStatic = getStaticRoute(item.page?.type);
        const isActive = getActive(isStatic, item?.page?.slug, router);
        const isPostsActive = router.asPath.includes(item?.page?.slug);

        // Dropdown List
        if (isDropdown) {
          const { dropdownItems } = item;
          const activeDropdown =
            dropdownItems.filter((item) => {
              const isStatic = getStaticRoute(item.page?.type);
              return getActive(isStatic, item.page?.slug, router);
            }).length > 0;

          return (
            <li key={key} className={activeDropdown ? "is-active" : null}>
              <Dropdown
                title={item.title}
                id={item._key}
                items={item.dropdownItems}
                onMouseEnter={onClick}
              />
            </li>
          );

          // single link
        } else {
          return (
            <li
              key={key}
              className={isPostsActive || isActive ? "is-active" : null}
            >
              <CustomLink
                tabIndex={!hasFocus ? -1 : null}
                link={item}
                onClick={onClick}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
