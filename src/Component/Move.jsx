import { useState } from "react";
import { useEffect } from "react";

const Move = () => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setx(e.clientX);
      sety(e.clientY);
    });
    console.log("done");
  }, []);

  return (
    <div>
      <p>{x}</p>
      <p>{y}</p>
    </div>
  );
};

export default Move;
