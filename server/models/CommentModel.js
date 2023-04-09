import mongoose from "mongoose";
// import { bcrypt } from "bcrypt";
const commentSchema = new mongoose.Schema(
  {
    comment: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    // text: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;
