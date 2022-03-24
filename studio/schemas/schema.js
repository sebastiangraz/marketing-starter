import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import article from './documents/article'

import generalSettings from './documents/settings-general'
import cookieSettings from './documents/settings-cookie'
import headerSettings from './documents/settings-header'
import footerSettings from './documents/settings-footer'
import seoSettings from './documents/settings-seo'
import menu from './documents/menu'
import redirect from './documents/redirect'

// Module types
import grid from './modules/grid'
import media from './modules/media'
import dividerPhoto from './modules/divider-photo'
import newsletter from './modules/newsletter'
import parallax from './modules/parallax'

// Object types
import gridColumn from './objects/grid-column'
import gridSize from './objects/grid-size'
import seo from './objects/seo'

import navDropdown from './objects/nav-dropdown'
import navPage from './objects/nav-page'
import navPosts from './objects/nav-posts'
import navLink from './objects/nav-link'
import socialLink from './objects/social-link'
import horizontalRule from './objects/horizontal-rule'
import maxWidth from './objects/maxWidth'

import simplePortableText from './objects/portable-simple'
import complexPortableText from './objects/portable-complex'

import freeform from './objects/freeform'
import accordions from './objects/accordions'
import accordion from './objects/accordion'

import participant from './objects/participant'
import imageFeature from './objects/image-feature'

/*  ------------------------------------------ */
/*  Your Schema documents / modules / objects
/*  ------------------------------------------ */
export default createSchema({
  // The name of our schema
  name: 'content',

  types: schemaTypes.concat([
    /* ----------------- */
    /* 1: Document types */
    page,
    article,

    generalSettings,
    cookieSettings,
    headerSettings,
    footerSettings,
    seoSettings,
    menu,
    redirect,

    /* --------------- */
    /* 2: Module types */
    grid,
    media,
    dividerPhoto,
    newsletter,
    parallax,

    /* ----------------------- */
    /* 3: Generic Object types */
    gridColumn,
    gridSize,
    seo,

    navDropdown,
    navPage,
    navPosts,
    navLink,
    socialLink,
    horizontalRule,
    maxWidth,

    simplePortableText,
    complexPortableText,

    freeform,
    accordions,
    accordion,
    imageFeature,

    participant
  ])
})
