import { videos } from '@/lib/data';
import VideoCard from '@/components/VideoCard';
import React from 'react';

interface PageProps {
  params: { tag: string };
}

const Page = async ({ params }: PageProps) => {
  const { tag } = params;
  const filtered = videos.filter(video => video.tags.includes(tag));

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Videos tagged with {tag}</h1>
      {filtered.length === 0 ? (
        <p>No videos found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map(video => (
            <VideoCard
              key={video.slug}
              title={video.title}
              thumbnail={video.thumbnail}
              slug={video.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page; 