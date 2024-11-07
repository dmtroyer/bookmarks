import React from 'react';
import Card from "./components/card";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bookmarks`);
  const result = await response.json();
  const bookmarks = result.status === 'success' ? result.data : [];

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {bookmarks.map((bookmark) => (
        <Card key={bookmark._id} id={bookmark._id} url={bookmark.url} name={bookmark.name} />
      ))}
    </div>
  );
}
