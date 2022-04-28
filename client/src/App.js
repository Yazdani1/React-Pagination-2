import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import "./App.css";
import Paginationfinal from "./components/PaginationusingReactpackage/Paginationfinal";
import CardList from "./components/Multiple Item Select/CardList";
import ListItems from "./components/SelectMark/ListItems";
import List from "./components/List/List";

const App = () => {
  const [data, setData] = useState([]);

  //load data by clicking

  const [loadapi, setLoadapi] = useState([]);

  const [show, setShow] = useState(false);

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
          setLoadapi(result);
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

  const getapidatabyClicking = () => {
    loadData();
  };

  return (
    <React.Fragment>
      <Posts posts={currrentPagedata} />

      <Paginationfinal
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
      {/* <CardList /> */}
      {/* <ListItems /> */}
      <List/>

      <div className="container" onClick={() => setShow(!show)}>
        {show ? (
          <div
            className="card mark-get-data-button-true"
            onClick={getapidatabyClicking}
          >
            <p>Get Data</p>
          </div>
        ) : (
          <div
            className="card mark-get-data-button"
            onClick={getapidatabyClicking}
          >
            <p>Get Datasss</p>
          </div>
        )}
      </div>

      {show &&
        loadapi.map((item, index) => (
          <>
            <div className="container">
              <h6>{item.title}</h6>
            </div>
          </>
        ))}
    </React.Fragment>
  );
};

export default App;
