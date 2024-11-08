import dbConnect from '@/lib/mongoose';
import Bookmark from '@/app/models/Bookmark';
import { successResponse, errorResponse } from '@/utils/apiResponse';
import { scrapeOpenGraph } from '@/lib/scrapeOpenGraph';

export async function GET() {
  try {
    await dbConnect();
    const bookmarks = await Bookmark.find({}).lean();
    return successResponse(bookmarks, 'Bookmarks retrieved successfully');
  } catch (error) {
    return errorResponse('Failed to fetch bookmarks', error.message);
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();

    if (data.url) {
      try {
        // Scrape Open Graph data
        const ogData = await scrapeOpenGraph(data.url);

        // Store all Open Graph results in metadata
        data.metadata = ogData.result;

        // Conditionally add the ogImage URL as imageUrl if it exists
        data.imageUrl = ogData.result.ogImage?.[0]?.url
      } catch (error) {
        console.error('Failed to fetch Open Graph data', data.url);
      }
    }

    const newBookmark = new Bookmark(data);
    await newBookmark.save();
    return successResponse(newBookmark.toObject(), 'Bookmark created successfully', 201);
  } catch (error) {
    return errorResponse('Failed to create bookmark', error.message);
  }
}
