import React from "react";

const ListComponent = ({ name }) => {
  return (
    <React.Fragment>
      <div className="card card-items">
        <h6>{name}</h6>
      </div>
    </React.Fragment>
  );
};

export default ListComponent;
