import { Star } from 'phosphor-react'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: Star,
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
      title: 'Primary CTA',
      name: 'primaryCTA',
      type: 'string'
    },
    {
      title: 'Secondary CTA',
      name: 'secondaryCTA',
      type: 'string'
    },
    {
      title: 'Word ticker',
      name: 'ticker',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'header'
    },
    prepare({ title, lead }) {
      return {
        title: `Hero`,
        subtitle: `${title}`
      }
    }
  }
}
