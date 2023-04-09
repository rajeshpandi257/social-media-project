import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    // userId: { type: String, required: true },

    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const ChatModel = mongoose.model("Chat", ChatSchema);
export default ChatModel;
