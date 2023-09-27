import React, { useState } from "react";

const Usestate = () => {
  const [name, setname] = useState("leen");
  const [color, setcolor] = useState("white");

  const body = color === "white" ? "black" : "white";

  function update() {
    setname("marah");
  }
  const change = () => {
    setcolor(body);
  };
  return (
    <div style={{ background: body }}>
      <p> Hello {name}</p>
      <buton onClick={update}>click</buton>

      {/* ex-2 */}
      <button onClick={change}>change</button>

      {/* example-3 */}
      
    </div>
  );
};

export default Usestate;
