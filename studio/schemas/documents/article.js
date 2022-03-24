import React from 'react'
import { Gift, CloudArrowDown, ArrowsClockwise } from 'phosphor-react'

export default {
  name: 'article',
  title: 'Article',
  type: 'object',
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
