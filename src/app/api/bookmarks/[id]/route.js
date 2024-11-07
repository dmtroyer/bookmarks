import dbConnect from '@/lib/mongoose';
import Bookmark from '@/app/models/Bookmark';

export async function GET(request, { params }) {
  await dbConnect();
  const id = (await params).id;
  const bookmark = await Bookmark.findById(id);
  return new Response(JSON.stringify(bookmark), {
    headers: { 'Content-Type': 'application/json' }
  });
}
