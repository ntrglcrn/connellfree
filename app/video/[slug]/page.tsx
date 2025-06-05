import { videos } from '@/lib/data';
import VideoPlayer from '@/components/VideoPlayer';
import TagList from '@/components/TagList';
import RelatedVideos from '@/components/RelatedVideos';
import React from 'react';

interface PageProps {
  params: { slug: string };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;
  const video = videos.find(v => v.slug === slug);

  if (!video) {
    return <p>Not Found</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <VideoPlayer url={video.url} />
      <div className="my-4">
        <TagList tags={video.tags} />
      </div>
      <RelatedVideos currentSlug={video.slug} tags={video.tags} />
    </div>
  );
};

export default Page; 