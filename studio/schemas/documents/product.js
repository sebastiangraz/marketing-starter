import React from 'react'
import { Gift, CloudArrowDown, ArrowsClockwise } from 'phosphor-react'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  // __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      title: 'Display Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'simplePortableText'
    },

    {
      title: 'Page Content',
      name: 'modules',
      type: 'complexPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
