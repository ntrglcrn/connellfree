export default {
  name: 'video',
  type: 'document',
  title: 'Видео',
  fields: [
    { name: 'title', type: 'string', title: 'Название' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'url', type: 'url', title: 'Embed URL' },
    { name: 'thumbnail', type: 'image', title: 'Обложка' },
    { name: 'tags', type: 'array', title: 'Теги', of: [{ type: 'string' }] },
    { name: 'category', type: 'string', title: 'Категория' },
  ]
} 