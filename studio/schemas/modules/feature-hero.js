import { ListChecks } from 'phosphor-react'

export default {
  title: 'Feature Hero',
  name: 'featureHero',
  type: 'object',
  icon: ListChecks,
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Lead',
      name: 'lead',
      type: 'string'
    },
    {
      title: 'Feature Header',
      name: 'featureHeader',
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
            },
            {
              title: 'List Items',
              name: 'listItems',
              type: 'object',
              fields: [
                {
                  title: 'Size',
                  name: 'size',
                  type: 'string',
                  options: {
                    layout: 'radio',
                    direction: 'horizontal',
                    list: [
                      { value: 'default', title: 'Default' },
                      { value: 'large', title: 'Large' }
                    ]
                  },

                  initialValue: 'default'
                },
                {
                  title: 'Feature List',
                  name: 'featureList',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          title: 'String',
                          name: 'string',
                          type: 'string'
                        },
                        {
                          title: 'Coming soon',
                          name: 'soon',
                          type: 'boolean',
                          initialValue: false
                        }
                      ]
                    }
                  ]
                }
              ]
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
