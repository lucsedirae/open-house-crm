import React from "react";

const PostItem = ({ post }) => {
  const { name, title, body, replies } = post;
  return (
    <div>
      <h1>{title}</h1>
      <h4>By {name}</h4>
      <p>{body}</p>
      <h2>Comments</h2>
      {replies && replies.map((reply) => <h3>{reply.body}</h3>)}
    </div>
  );
};

export default PostItem;
