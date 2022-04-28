import React, { useState, useEffect } from "react";
import "./ListItems.css";
import ListComponent from "./ListComponent";

const ListItems = () => {
  const data = [
    {
      name: "React",
      id: 1,
      cat: "Frontend",
    },
    {
      name: "Python",
      id: 2,
      cat: "Frontend",
    },
    {
      name: "Node js",
      id: 3,
      cat: "Frontend",
    },
    {
      name: "Nuxt js",
      id: 4,
      cat: "Frontend",
    },
    {
      name: "Vue js",
      id: 5,
      cat: "Backend",
    },
    {
      name: "Express js",
      id: 6,
      cat: "Backend",
    },
  ];

  const [list, setList] = useState(data);

  const [showButton, setShowButton] = useState(false);

  const getDatabycatbackend = (catitem) => {
    const newlist = list.filter((item) => item.cat === catitem);
    setList(newlist);
  };

  const getDatabycatfrontend = (catitem) => {
    const newlist = list.filter((item) => item.cat === catitem);
    setList(newlist);
  };



  return (
    <React.Fragment>
      <div className="container">
        <button
          className="btn btn-danger"
          onClick={() => getDatabycatbackend("Backend")}
        >
          Backend
        </button>
        <button
          className="btn btn-primary"
          onClick={() => getDatabycatfrontend("Frontend")}
        >
          Frontend
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setList(data)}
        >
          All
        </button>
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
                    itemnumbers={index}
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
