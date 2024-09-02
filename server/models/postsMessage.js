import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: { type: [String], default: [] },
});

const PostsMessage = mongoose.model("PostsMessage", postsSchema);

export default PostsMessage;
