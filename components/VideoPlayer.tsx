import React from 'react';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <iframe
        src={url}
        width="100%"
        height="500"
        allowFullScreen
        style={{ border: 'none' }}
        className="w-full h-[500px]"
        title="Video Player"
      />
    </div>
  );
};

export default VideoPlayer; 