import React, { useState } from "react";
import { FcOk } from "react-icons/fc";

const ListComponent = ({ name,index }) => {
  const [mark, setMark] = useState(false);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setMark(!mark);
    setCount(count + 1);
  };



  return (
    <React.Fragment>
      {mark ? (
        <div className="card card-items-mark" onClick={handleClick}>
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
