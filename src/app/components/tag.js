import React from 'react';

export default function Tag({ name }) {
  return (
    <a
      href={`/tags/${name}`}
      className="font-geist-mono bg-gray-200 dark:bg-gray-700 text-gray-800
                 dark:text-gray-300 px-2 py-1 rounded-md text-sm hover:bg-gray-300
                 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
    >
      {name}
    </a>
  )
}
