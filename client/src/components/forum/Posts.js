//* Dependencies
import React from "react";

//* Custom components
import PostItem from "./PostItem";

//* Exported component
const Posts = ({ posts, setPosts, _id }) => {
  //* Returns JSX to DOM
  return (
    <div>
      {posts.length === 0 && <h2>No Posts To Display</h2>}
      {posts.map((post) => (
        <PostItem
          key={post._id}
          post={post}
          posts={posts}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
};

export default Posts;
