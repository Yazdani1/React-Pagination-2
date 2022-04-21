import React from "react";
import "../App.css";
import "./post.css";
const Posts = ({ posts }) => {
  return (
    <div className="container post-container">
      <div className="card export-card">
        <span className="export-design" onClick={() => alert("Clicked here")}>
          <h4>Export</h4>
        </span>
      </div>
      {posts.map((item) => (
        <div className="post-item" key={item.id}>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Posts;
