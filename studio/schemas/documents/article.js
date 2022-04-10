import React from 'react'
import { Gift, CloudArrowDown, ArrowsClockwise } from 'phosphor-react'

export default {
  name: 'article',
  title: 'Article',
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
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      title: 'Description',
      name: 'description',
      type: 'simplePortableText'
    },

    {
      title: 'Page Content',
      name: 'content',
      type: 'complexPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
