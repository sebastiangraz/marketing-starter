import { Notebook } from 'phosphor-react'

export default {
  title: 'Posts',
  name: 'navPosts',
  type: 'object',
  icon: Notebook,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'slug',
      description: 'enter an external URL'
    }
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url'
    },
    prepare({ title, url }) {
      return {
        title: title,
        subtitle: url.current
      }
    }
  }
}
