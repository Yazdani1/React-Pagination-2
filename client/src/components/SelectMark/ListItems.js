import React, { useState, useEffect } from "react";
import "./ListItems.css";
import ListComponent from "./ListComponent";

const ListItems = () => {
  const data = [
    {
      name: "React",
      id: 1,
    },
    {
      name: "Python",
      id: 2,
    },
    {
      name: "Node js",
      id: 3,
    },
    {
      name: "Nuxt js",
      id: 4,
    },
    {
      name: "Vue js",
      id: 5,
    },
    {
      name: "Express js",
      id: 6,
    },
  ];

  const [list, setList] = useState(data);

  const [showButton, setShowButton] = useState(false);

  return (
    <React.Fragment>
      <div className="container">
        <button className="btn btn-danger">Download</button>
        <div className="list-items">
          <div className="row">
            {list.map((item, index) => (
              <>
                <div className="col-xl-3 col-lg-3">
                  <ListComponent
                    key={item.id}
                    name={item.name}
                    index={index}
                    id={item.id}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListItems;
