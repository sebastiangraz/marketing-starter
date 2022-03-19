import { TextAlignLeft } from 'phosphor-react'

import { getPtPreview } from '../../lib/helpers'

export default {
  title: 'Freeform',
  name: 'freeform',
  type: 'object',
  icon: TextAlignLeft,

  fields: [
    {
      title: ' ',
      name: 'content',
      type: 'complexPortableText'
    },
    // {
    //   title: 'Max Width',
    //   name: 'maxWidth',
    //   type: 'number',
    //   description:
    //     'Apply a max-width to this block, inside the column (helps with legibility)',
    //   options: {
    //     list: [
    //       { title: 'None', value: 0 },
    //       { title: 'Narrow', value: 1 },
    //       { title: 'Mid', value: 2 },
    //       { title: 'Wide', value: 3 }
    //     ]
    //   }
    // },
    { title: 'Max width', name: 'maxWidth', type: 'maxWidth' },
    {
      title: 'Center Vertically',
      name: 'textAlign',
      type: 'boolean',
      description: 'Vertically centers the text'
    }
  ],
  preview: {
    select: {
      content: 'content.0'
    },
    prepare({ content }) {
      return {
        title: 'Freeform',
        subtitle: getPtPreview(content)
      }
    }
  }
}
