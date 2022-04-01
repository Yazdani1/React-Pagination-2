import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import "./App.css";
import Paginationfinal from "./components/PaginationusingReactpackage/Paginationfinal";

const App = () => {
  const [data, setData] = useState([]);


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

      <Paginationfinal data={data} />

    </React.Fragment>
  );
};

export default App;
