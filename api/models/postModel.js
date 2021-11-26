import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date
});

export const Post = mongoose.model("post", postSchema);