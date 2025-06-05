// sanity/components/EmbedWithPreviewInput.tsx
'use client'
import { useEffect, useState } from 'react'
import { set, unset } from 'sanity'
import getVideoId from 'get-video-id'

interface EmbedWithPreviewInputProps {
  value: string;
  onChange: (patch: any) => void;
  onThumbnailChange: (value: string) => void;
}

export default function EmbedWithPreviewInput({ value, onChange, onThumbnailChange }: EmbedWithPreviewInputProps) {
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (!value) {
      setPreview(null)
      return
    }

    const { id, service } = getVideoId(value)
    if (!id || !service) return

    let thumb: string | null = null
    if ((service as string) === 'pornhub') {
      thumb = `https://i.pornhub.com/video/${id}/thumbnail.jpg`
    } else if ((service as string) === 'xvideos') {
      // У Xvideos нет официального API, можно использовать мок:
      thumb = `https://img.xvideos-cdn.com/videos/thumbs169/${id[0]}/${id}.jpg`
    }

    if (thumb) {
      setPreview(thumb)
      onThumbnailChange(thumb)
    }
  }, [value, onThumbnailChange])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        type="url"
        placeholder="https://www.pornhub.com/embed/..."
        value={value || ''}
        onChange={(e) => {
          const val = e.target.value
          if (!val) {
            onChange(unset())
          } else {
            onChange(set(val))
          }
        }}
      />
      {preview && (
        <img
          src={preview}
          alt="Video thumbnail"
          style={{ maxWidth: '100%', borderRadius: 8 }}
        />
      )}
    </div>
  )
}
