import commentController from "../models/CommentModel.js";

const commentMessage = async (req, res) => {
  try {
    const { userId, postId, text } = req.body;
    const comment = new commentController({ userId, postId, text });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
export default commentMessage;
