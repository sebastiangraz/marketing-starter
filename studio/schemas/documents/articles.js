export default {
  name: 'articles',
  title: 'Articles',
  type: 'document',

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
    }
  ]
}
