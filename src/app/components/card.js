import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function Card({ bookmark }) {
  return (
    <div id={`card-${bookmark.id}`} className="p-4 max-w-sm min-w-[250px]">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 flex-col">

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

        {/* Tags */}
        <div className="p-4 flex flex-wrap gap-2 mt-auto">
          {bookmark.tags?.map((tag) => (
            <a
              key={tag}
              href={`/tags/${tag}`}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md text-sm hover:underline"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
