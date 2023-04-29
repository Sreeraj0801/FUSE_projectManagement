import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CommentBox() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (value="pppp") => {
    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the comment, such as sending it to a server or updating state in a parent component
    console.log("Comment:", comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-box">
        <div className="user-avatar">
          <img src="https://via.placeholder.com/50x50" alt="User avatar" />
        </div>
        <div className="comment-editor">
          <ReactQuill value={comment} onChange={handleCommentChange} />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentBox;
