import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    // postedBy: {
    //   type: ObjectId,
    //   ref: "User",
    // },

    image: String,
    // comments: {
    //   text: String,
    //   createdAt: {
    //     type: Date,
    //     default: new Date(),
    //   },
    //   postedBy: {
    //     type: ObjectId,
    //     ref: "User",
    //   },
    // },
  },

  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
