import { client } from '@/lib/sanity.client'
import { getVideoBySlugQuery, getRelatedVideosQuery } from '@/lib/queries'

type Props = {
  params: {
    slug: string
  }
}

export default async function VideoPage({ params }: Props) {
  const video = await client.fetch(getVideoBySlugQuery, {
    slug: params.slug
  })

  if (!video) {
    return <div>Видео не найдено</div>
  }

  const relatedVideos = await client.fetch(getRelatedVideosQuery, {
    id: video._id,
    tags: video.tags || []
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>

      <iframe
        src={video.url}
        className="w-full aspect-video rounded"
        allowFullScreen
      />

      <div className="mt-4">
        <h2 className="text-sm font-semibold">Теги:</h2>
        <div className="flex flex-wrap gap-2 mt-1 text-sm text-gray-600">
          {video.tags?.map((tag: string) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      {relatedVideos.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Похожие видео</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedVideos.map((item: any) => (
              <a
                key={item._id}
                href={`/video/${item.slug}`}
                className="block group"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded w-full aspect-video object-cover group-hover:opacity-80 transition"
                />
                <div className="mt-2 text-sm font-medium">{item.title}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 