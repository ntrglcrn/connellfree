import React from 'react';
import Link from 'next/link';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  slug: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, slug }) => {
  return (
    <Link href={`/video/${slug}`}>
      <a className="block group overflow-hidden rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105">
        <div className="relative w-full aspect-video bg-gray-200">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full transition-opacity duration-200 group-hover:opacity-80"
          />
        </div>
        <div className="mt-2 px-2 pb-2">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
            {title}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default VideoCard; 