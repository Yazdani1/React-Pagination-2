import React from "react";
import "../App.css";
import "./post.css";
import * as XLSX from 'xlsx'

const Posts = ({ posts }) => {
  
  const downloadExcelfile = () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(posts);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  return (
    <div className="container post-container">
      <div className="card export-card">
        <span className="export-design" onClick={downloadExcelfile}>
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
