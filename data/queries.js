// Construct our "home" and "error" page GROQ
export const homeID = `*[_type=="generalSettings"][0].home->_id`;
export const articlesID = `*[_type=="generalSettings"][0].posts->_id`;
export const errorID = `*[_type=="generalSettings"][0].error->_id`;

// Construct our "page" GROQ
const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  "isArticles": _id == ${articlesID},
`;

// Construct our "link" GROQ
const link = `
  _key,
  _type,
  title,
  url,
  "page": page->{
    ${page}
  }
`;

// Construct our "image meta" GROQ
export const imageMeta = `
  "alt": coalesce(alt, asset->alt),
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`;

// Construct our "portable text content" GROQ
export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.url,
      "isButton": @.isButton,
      "styles": @.styles{style, isLarge, isBlock},
      "page":@.page->{
        ${page}
      }
    }
  },
  _type == "photo" => {
    ${imageMeta}
  }
`;

// Construct our "blocks" GROQ
export const blocks = `
  _type == 'freeform' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    textAlign,
    maxWidth
  },
  _type == 'accordions' => {
    _type,
    _key,
    items[]{
      "id": _key,
      title,
      content[]{
        ${ptContent}
      }
    }
  },
  _type == 'imageFeature' => {
    _type,
    _key,
    "id": _key,
    title,
    content,
    align,
    image{
      ${imageMeta}
    }
  }

`;

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    _type,
    _key,
    columns[]{
      sizes,
      blocks[]{
        ${blocks}
      }
    }
  },
  _type == 'media' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    maxWidth,
    bgType,
    photos{
      ...,
      mobilePhoto{
        ${imageMeta}
      },
      desktopPhoto{
        ${imageMeta}
      }
    },
    video{
      id,
      title
    }
  },
  _type == 'hero' => {
    _type,
    _key,
    header,
    lead,
    primaryCTA,
    secondaryCTA
  },
  _type == 'dividerPhoto' => {
    _type,
    _key,
    photo{
      ${imageMeta}
    }
  },
  _type == 'parallax' => {
    _type,
    _key,
    parallaxContainer[]{
      "id": _key,
      sizes,
      heading
    }
  },
`;

// Construct our "site" GROQ
export const site = `
  "site": {
    "title": *[_type == "generalSettings"][0].siteTitle,
    "rootDomain": *[_type == "generalSettings"][0].siteURL,
    "cookieConsent": *[_type == "cookieSettings"][0]{
      enabled,
      message,
      "link": link->{"type": _type, "slug": slug.current}
    },
    "header": *[_type == "headerSettings"][0]{
      menuDesktopLeft->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          }
        }
      },
      menuDesktopRight->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          }
        }
      },
      menuMobilePrimary->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
        }
      },
      menuMobileSecondary->{
        items[]{
          ${link},
          dropdownItems[]{
            ${link}
          },
        }
      }
    },
    "footer": *[_type == "footerSettings"][0]{
      "blocks": [
        {
          "title": blockTitle1,
          newsletter{
            "id": "footer",
            klaviyoListID,
            submit,
            successMsg[]{
              ${ptContent}
            },
            errorMsg[]{
              ${ptContent}
            },
            terms[]{
              ${ptContent}
            }
          }
        },
        {
          "title": blockTitle2,
          "menu": blockMenu2->{
            items[]{
              ${link}
            }
          }
        },
        {
          "title": blockTitle3,
          "menu": blockMenu3->{
            items[]{
              ${link}
            }
          }
        },
        {
          "title": blockTitle4,
          social[]{
            icon,
            url
          }
        }
      ]
    },
    "seo": *[_type == "seoSettings"][0]{
      metaTitle,
      metaDesc,
      shareTitle,
      shareDesc,
      shareGraphic,
      "favicon": favicon.asset->url,
      "faviconLegacy": faviconLegacy.asset->url,
      touchIcon
    },
    "gtmID": *[_type == "generalSettings"][0].gtmID,
  }
`;
