import { videos } from '@/lib/data';
import VideoCard from '@/components/VideoCard';
import React from 'react';

const Home = async () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Videos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {videos.map(video => (
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

export default Home; 