import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.length === 0 && <h2>No Posts To Display</h2>}
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
};

export default Posts;
