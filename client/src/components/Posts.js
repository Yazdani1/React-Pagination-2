import React from "react";
import "../App.css";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((item) => (
        <div className="post-item" key={item.id}>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Posts;
