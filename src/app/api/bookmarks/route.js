import dbConnect from '@/lib/mongoose';
import Bookmark from '@/app/models/Bookmark';
import { successResponse, errorResponse } from '@/utils/apiResponse';

export async function GET() {
  try {
    await dbConnect();
    const bookmarks = await Bookmark.find({});
    return successResponse(bookmarks, 'Bookmarks retrieved successfully');
  } catch (error) {
    return errorResponse('Failed to fetch bookmarks', error.message);
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const newBookmark = new Bookmark(data);
    await newBookmark.save();
    return successResponse(newBookmark, 'Bookmark created successfully', 201);
  } catch (error) {
    return errorResponse('Failed to create bookmark', error.message);
  }
}
