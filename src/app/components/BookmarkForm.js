'use client'

import React, { useRef } from 'react';
import { createBookmark } from '@/app/actions/bookmarkActions';

export default function BookmarkForm() {
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    // Call the server action and check if it was successful
    const success = await createBookmark(formData);

    // Reset the form if the submission was successful
    if (success) {
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-4 w-full max-w-sm bg-gray-950 rounded-lg border border-slate-800 flex flex-col space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-white text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-slate-700 focus:border-blue-500 focus:outline-none"
          placeholder="Enter a name"
          required
        />
      </div>

      {/* URL Input */}
      <div>
        <label htmlFor="url" className="block text-white text-sm font-medium mb-1">
          URL
        </label>
        <input
          type="url"
          id="url"
          name="url"
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-slate-700 focus:border-blue-500 focus:outline-none"
          placeholder="Enter a URL"
          required
        />
      </div>

      {/* Tags Input */}
      <div>
        <label htmlFor="tags" className="block text-white text-sm font-medium mb-1">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-slate-700 focus:border-blue-500 focus:outline-none"
          placeholder="Enter tags separated by commas"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
