import React from 'react';
import Link from 'next/link';

interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
          <a className="px-3 py-1 rounded-full bg-gray-200 text-sm text-gray-700 hover:bg-gray-300 transition-colors duration-150">
            {tag}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TagList; 