import React from "react";

const Destructuring = ({ name, age, address }) => {
  return (
    <div>
      <h3>my name is {name} </h3>
      <h4>age : {age} </h4>
      <h6>address : {address} </h6>
    </div>
  );
};

export default Destructuring;
