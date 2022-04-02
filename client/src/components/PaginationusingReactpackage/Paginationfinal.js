import React, { useEffect, useState } from "react";
import "../../App.css";
import ReactPaginate from "react-paginate";
import Posts from "../Posts";

const Paginationfinal = ({data}) => {
  //for pagination
  const PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = ({ selected: slectedPage }) => {
    setCurrentPage(slectedPage);
  };

  const offSet = currentPage * PER_PAGE;

  const currrentPagedata = data.slice(offSet, offSet + PER_PAGE);

  //total page count

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div>
      {" "}
      <Posts posts={currrentPagedata}/>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break-class"
        nextLabel="Next"
        pageClassName={"pagination-design"}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        activeClassName={"pagination__link--active"}
        activeLinkClassName={"active-link-text"}
        pageCount={pageCount}
        disabledClassName={"pagination__link--disabled"}
        previousLabel="Previous"
        previousClassName={"previous-button"}
        nextClassName={"next-button"}
        pageRangeDisplayed={3}
        pageLinkClassName={"selected-page"}
        
      />
    </div>
  );
};

export default Paginationfinal;
