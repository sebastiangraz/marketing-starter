import React from "react";

import Newsletter from "../components/newsletter";
import Menu from "../components/menu";
import Icon from "../components/icon";

const style = {
  wrapper: {
    borderTop: "1px solid currentColor",
  },
  footer: {
    variant: `${"layout.row"}`,
  },
  footerGrid: {
    columnGap: 6,
    variant: `${"layout.grid"}`,
  },
  footerItem: {
    py: [1, 4],
    gridColumn: `span 3`,
  },
  ul: {
    p: "0px",
    flexDirection: "column",
    li: { p: "0px" },
  },
};
const Footer = ({ data = {} }) => {
  const { blocks } = data;

  return (
    <footer role="contentinfo" sx={style.wrapper}>
      <div sx={style.footer}>
        <div sx={style.footerGrid}>
          {blocks &&
            blocks.map((block, key) => (
              <div key={key} sx={style.footerItem}>
                {block.title && <p className="is-h3">{block.title}</p>}

                {block.menu?.items && (
                  <Menu items={block.menu.items} sx={style.ul} />
                )}

                {block.newsletter && <Newsletter data={block.newsletter} />}

                {block.social && (
                  <div className="menu-social">
                    {block.social.map((link, key) => {
                      return (
                        <a
                          key={key}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon name={link.icon} />
                        </a>
                      );
                    })}
                  </div>
                )}

                {/* Put our extras in the last block */}
                {key === 3 && (
                  <div className="footer--extras">
                    <div className="footer--disclaimer">
                      <p>
                        &copy; {new Date().getFullYear()}. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
