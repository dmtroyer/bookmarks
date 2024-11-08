import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  metadata: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
  },
  tags: {
    type: [String],
    index: true
  },
  url: String,
}, {
  timestamps: true
});

export default mongoose.models.Bookmark || mongoose.model("Bookmark", BookmarkSchema);
