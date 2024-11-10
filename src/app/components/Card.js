import React from 'react';
import Tag from '@/app/components/Tag';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function Card({ bookmark }) {
  return (
    <div id={`card-${bookmark.id}`} className="p-4 max-w-sm min-w-[250px]">
      <div className="flex rounded-lg h-full bg-gray-950 flex-col border border-slate-800">

        {/* Title*/}
        <div className="p-4 flex items-center justify-between">
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-white text-lg font-medium hover:underline"
          >
            {bookmark.name}
          </a>
          <a
            href={`/bookmarks/${bookmark._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-110 transition-transform duration-200"
          >
            <PencilSquareIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Image */}
        {bookmark.imageUrl && (
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <img src={bookmark.imageUrl} alt={bookmark.name} className="w-full h-48 object-cover" />
          </a>
        )}

        {bookmark.tags?.length > 0 && (
          <div className="p-4 flex flex-wrap gap-2 mt-auto">
            {bookmark.tags.map((tag) => <Tag key={tag} name={tag} />)}
          </div>
        )}
      </div>
    </div>
  );
}
