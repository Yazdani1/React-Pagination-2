import React, { useState } from "react";
import "./CardList.css";

const CardList = () => {
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
  const [newItem, setNewItem] = useState([]);

  const newIndexPositionhold = [];

  const handleSeletect = (id) => {
    // newIndexPositionhold.push(id);
    // const newList = list.filter((item) => item.id !== id);
    // setList(newList);

    // setNewItem(id);
    // setList([...list, newItem]);

    setList(id);

    setNewItem([...newItem,list])
  };

  return (
    <React.Fragment>
      <div className="container">
        <h5>Total List Items: {newItem.length}</h5>
        <div className="list-items">
          <div className="row">
            {list.map((item, index) => (
              <>
                <div className="col-xl-3 col-lg-3">
                  <div
                    key={item.id}
                    className="card card-items"
                    onClick={() => handleSeletect(item.id)}
                  >
                    <h6>{item.name}</h6>
                    <h6>{item.id}</h6>
                    <h1>{index}</h1>

                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardList;
