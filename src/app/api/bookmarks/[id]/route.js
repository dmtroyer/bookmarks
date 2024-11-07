import dbConnect from '@/lib/mongoose';
import Bookmark from '@/app/models/Bookmark';
import { successResponse, resourceNotFoundResponse, errorResponse } from '@/utils/apiResponse';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const id = (await params).id;
    const bookmark = await Bookmark.findById(id).lean();

    if (!bookmark) {
      return resourceNotFoundResponse('Bookmark not found.');
    }

    return successResponse(bookmark);
  } catch (error) {
    return errorResponse('Failed to fetch bookmark', error.message);
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const id = (await params).id;
    const deletedBookmark = await Bookmark.findByIdAndDelete(id);

    if (!deletedBookmark) {
      return resourceNotFoundResponse('Bookmark not found.');
    }

    return successResponse(undefined, 'Bookmark deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete bookmark', error.message);
  }
}
