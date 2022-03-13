import S from '@sanity/desk-tool/structure-builder'

import { settingsMenu } from './desk/settings'
import { pagesMenu } from './desk/pages'
import { menusMenu } from './desk/menus'

const hiddenDocTypes = listItem =>
  ![
    'page',
    'article',
    'productVariant',
    'generalSettings',
    'cookieSettings',
    'headerSettings',
    'footerSettings',
    'seoSettings',
    'menu',
    'siteSettings',
    'redirect'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website')
    .items([
      pagesMenu,
      S.divider(),
      menusMenu,
      S.divider(),
      settingsMenu,

      // Filter out docs already defined above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
