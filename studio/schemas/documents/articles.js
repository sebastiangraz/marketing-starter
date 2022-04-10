import { Notebook } from 'phosphor-react'

export default {
  name: 'articles',
  title: 'Articles',
  type: 'document',
  icon: Notebook,
  fields: [
    {
      title: 'Display Title',
      name: 'title',
      type: 'string',
      initialValue: 'Articles',
      readOnly: true
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
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}
