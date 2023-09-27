import React from "react";
import Greet from "./Component/Greet/Greet";
import Welcome from "./Component/Welcom/Welcome";
import Counter from "./Component/Counter/Counter";
import Destructuring from "./Component/Destructuring/Destructuring";
import User from "./Component/User/User.jsx";
import Numbers from "./Component/Numbers/Numbers";
import Usestate from "./Component/Usestate/Usestate";

const App = () => {
  return (
    <>
      {/* <div>
        <Greet name="Leen" />
        <Greet name="kareem" />
        <Greet name="Marah" />
        <Welcome />
        <Counter />
        <Destructuring name="leen" age="22" address="tulkarm" />
        <User />
      <Numbers/>
      </div>
      <div></div> */}
<Usestate/>

      
    </>
  );
};

export default App;
