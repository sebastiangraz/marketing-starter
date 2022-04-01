import { User } from 'phosphor-react'

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: User,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Picture',
      name: 'picture',
      type: 'image',
      validation: false
    }
  ]
}
