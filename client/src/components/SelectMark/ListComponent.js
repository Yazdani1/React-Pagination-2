import React, { useState } from "react";
import { FcOk } from "react-icons/fc";

const ListComponent = ({ name, index, id }) => {
  const [mark, setMark] = useState(false);

  const [count, setCount] = useState(0);

  const itemnumbers = [];

  const handleClick = () => {
    // if (index + 1) {
    //   setMark(true);

    // } else {
    //   setMark(false);
    // }

    itemnumbers.push(index);
    console.log("Total count:" + itemnumbers);

    setMark(!mark);
  };

  return (
    <React.Fragment>
      <p className="index-colorsss">Total:{itemnumbers.length}</p>

      {mark ? (
        <div
          className="card card-items-mark"
          onClick={() => handleClick(index)}
        >
          <h6>{name}</h6>
          <p>{mark && <FcOk size={20} />}</p>
          <p className="index-color">{mark && count}</p>
        </div>
      ) : (
        <div className="card card-items" onClick={handleClick}>
          <h6>{name}</h6>
          <p>{mark && <FcOk size={20} />}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default ListComponent;
