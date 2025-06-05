import EmbedWithPreviewInput from '../lib/EmbedWithPreviewInput'

export default {
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Название видео',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'url',
      type: 'url',
      title: 'Embed URL',
      components: {
        input: EmbedWithPreviewInput
      }
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Обложка видео',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Теги',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      type: 'string',
      title: 'Категория видео',
    },
  ],
} 