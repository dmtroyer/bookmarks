import React from "react";
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Card({ id, name, url }) {
  return (
    <div id={`card-${id}`} className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white dark:text-white text-lg font-medium">{name}</h2>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-110 transition-transform duration-200"
          >
            <GlobeAltIcon className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
          </p>
          <a href="#" className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
