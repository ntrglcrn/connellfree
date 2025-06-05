import React, { useState, useEffect } from 'react';
import { useFormValue, set, unset } from 'sanity';
import getVideoId from 'get-video-id';

interface Props {
  type: any;
  value: string;
  onChange: (event: any) => void;
  onBlur: () => void;
  onFocus: () => void;
  // Path to the thumbnail field (relative to this field)
  thumbnailPath: any[];
  // Function to patch the thumbnail field
  onThumbnailChange: (event: any) => void;
}

const getMockPreview = (platform: string, id: string) => {
  // Моковые превью для теста
  if (platform === 'pornhub') {
    return `https://i3.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
  if (platform === 'xvideos') {
    return `https://img.xvideos-cdn.com/videos/thumbs169poster/${id}.jpg`;
  }
  return '';
};

const EmbedWithPreviewInput: React.FC<Props> = ({ type, value, onChange, onBlur, onFocus, thumbnailPath, onThumbnailChange }) => {
  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    if (value) {
      const { id, service } = getVideoId(value);
      if (id && service) {
        const url = getMockPreview(service, id);
        setPreview(url);
        if (url) {
          // Устанавливаем превью в поле thumbnail
          onThumbnailChange(set({ asset: { _type: 'reference', url } }, thumbnailPath));
        }
      } else {
        setPreview('');
        onThumbnailChange(unset(thumbnailPath));
      }
    } else {
      setPreview('');
      onThumbnailChange(unset(thumbnailPath));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      <input
        type="url"
        value={value || ''}
        onChange={e => onChange(e.target.value ? set(e.target.value) : unset())}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder="Вставьте embed-ссылку на видео"
        className="sanity-input"
      />
      {preview && (
        <div style={{ marginTop: 12 }}>
          <img src={preview} alt="Превью видео" style={{ maxWidth: 320, borderRadius: 8 }} />
        </div>
      )}
    </div>
  );
};

export default EmbedWithPreviewInput; 