import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts, sendLikes }) => {
  return (
    <div>
      {posts.length === 0 && <h2>No Posts To Display</h2>}
      {posts.map((post) => (
        <PostItem post={post} sendLikes={sendLikes} />
      ))}
    </div>
  );
};

export default Posts;
