import React from 'react';
import Card from '@/app/components/Card';
import BookmarkForm from '@/app/components/BookmarkForm';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bookmarks`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });
  const result = await response.json();
  const bookmarks = result.status === 'success' ? result.data : [];

  return (
    <>
      <div className="flex flex-wrap justify-center mt-10">
        {bookmarks.map((bookmark) => (
          <Card key={bookmark._id} bookmark={bookmark} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <BookmarkForm />
      </div>
    </>
  );
}
