import React from 'react';
import { videos } from '../lib/data';
import VideoCard from './VideoCard';

interface RelatedVideosProps {
  currentSlug: string;
  tags: string[];
}

const RelatedVideos: React.FC<RelatedVideosProps> = ({ currentSlug, tags }) => {
  // Фильтрация видео
  const related = videos
    .filter(video =>
      video.slug !== currentSlug &&
      video.tags.some(tag => tags.includes(tag))
    )
    .slice(0, 6);

  if (related.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl mb-4">Related Videos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {related.map(video => (
          <VideoCard
            key={video.slug}
            title={video.title}
            thumbnail={video.thumbnail}
            slug={video.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos; 