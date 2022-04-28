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

  const handleSeletect = (id) => {
      
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <React.Fragment>
      <div className="container">
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
