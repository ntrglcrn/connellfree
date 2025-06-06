import { StructureBuilder } from 'sanity/desk'

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // уже существующие:
      S.documentTypeListItem('post').title('Post'),
      S.documentTypeListItem('author').title('Author'),
      S.documentTypeListItem('category').title('Category'),

      // ✅ добавляем сюда:
      S.divider(),
      S.documentTypeListItem('video').title('Видео'),
    ])
