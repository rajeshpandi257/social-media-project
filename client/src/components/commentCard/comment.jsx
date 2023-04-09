import React, { useState, useEffect } from "react";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(`/comments?postId=${postId}`);
      const data = await res.json();
      setComments(data);
    };
    fetchComments();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    const res = await fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: 1, postId, text }),
    });
    const data = await res.json();
    setComments([...comments, data]);
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.text}</p>
          <p>{comment.createdAt}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="Leave a comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
