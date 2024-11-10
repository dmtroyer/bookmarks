'use server'

import { revalidateTag } from 'next/cache';

export async function createBookmark(formData) {
  const tagsString = formData.get('tags');
  const tags = tagsString ? tagsString.split(',').map(tag => tag.trim()) : [];

  const bookmarkFormData = {
    name: formData.get('name'),
    url: formData.get('url'),
    tags,
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookmarkFormData),
    cache: 'no-store',
  });

  const result = await response.json();
  if (result.status === 'success') {
    revalidateTag('bookmarks');
    return true; // Indicates success
  }
  return false; // Indicates failure
}
