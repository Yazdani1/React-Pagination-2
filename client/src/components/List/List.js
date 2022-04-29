import React, { useState } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  // const addItem = () => {
  //   setList([
  //     ...list,
  //     {
  //       value: Math.floor(Math.random() * 10) + 1,
  //     },
  //   ]);
  // };

  const data = [
    {
      name: "React",
      id:1
    },
    {
      name: "Vue",
      id:2
    }
  ]

  const addItem = () => {
    // const newId = list.map((i,index)=>index)
    setList([...list, data]);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>List items: {list.length}</h1>
        <p onClick={addItem}>Add</p>
        {list.map((item) => (
          <>
          <p>{item.name}</p>
          </>
        ))}
      </div>
    </React.Fragment>
  );
};

export default List;
