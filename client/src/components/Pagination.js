import React from "react";

const Pagination = ({ postsPerPage, totalPosts,paginateClick }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
      pageNumbers.push(i);
  }
    return (
    <nav>
             <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={()=>paginateClick(number)} href="#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        {/* <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={()=>paginateClick(number)} href={"pageNumbers="+number} className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul> */}
    </nav>
        );
};

export default Pagination;
