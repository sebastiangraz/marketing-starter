import { Star } from 'phosphor-react'

import customImage from '../../lib/custom-image'

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
