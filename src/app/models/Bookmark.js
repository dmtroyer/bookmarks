import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  tags: [String],
  url: String,
}, {
  timestamps: true
});

export default mongoose.models.Bookmark || mongoose.model("Bookmark", BookmarkSchema);
