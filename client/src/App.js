import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import PaginationIndex from "./components/PaginationIndex";
import ReactPaginate from "react-paginate";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  //for pagination
  const PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(0);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const loadData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handlePageClick = ({ selected: slectedPage }) => {
    setCurrentPage(slectedPage);
  };

  const offSet = currentPage * PER_PAGE;

  // const currrentPagedata = data
  //   .slice(offSet, offSet + PER_PAGE)
  //   .map((res, index) => (
  //     <div key={index.id}>
  //       <h1>{res.title}</h1>
  //     </div>
  //   ));

  //total page count

  const currrentPagedata = data.slice(offSet, offSet + PER_PAGE);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <React.Fragment>
  
      <Posts posts={currrentPagedata}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        pageClassName={"pagination-design"}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        activeClassName={"pagination__link--active"}
        pageCount={pageCount}
        disabledClassName={"pagination__link--disabled"}
        previousLabel="Previous"
        previousClassName={"previous-button"}
        nextClassName={"next-button"}
      />
    </React.Fragment>
  );
};

export default App;
