import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import "./App.css";
import Paginationfinal from "./components/PaginationusingReactpackage/Paginationfinal";

const App = () => {
  const [data, setData] = useState([]);


  //for pagination

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
   //end page paginaion


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


  return (
    <React.Fragment>

      <Posts posts={currrentPagedata}/>

      <Paginationfinal pageCount={pageCount} handlePageClick={handlePageClick} />

    </React.Fragment>
  );
};

export default App;
