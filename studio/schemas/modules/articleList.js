import { List } from 'phosphor-react'

export default {
  title: 'Article Listing',
  name: 'articleList',
  type: 'object',
  icon: List,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'header'
    },
    prepare({ title }) {
      return {
        title: `Article Listing`,
        subtitle: `${title}`
      }
    }
  }
}
