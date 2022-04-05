import { Pill } from 'phosphor-react'

export default {
  title: 'Feature Selctor',
  name: 'featureSelector',
  type: 'object',
  icon: Pill,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Feature Title',
              name: 'featureTitle',
              type: 'string'
            },
            {
              title: 'Feature Description',
              name: 'featureDescription',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'header'
    },
    prepare({ title }) {
      return {
        title: `Feature Selector`,
        subtitle: `${title}`
      }
    }
  }
}
