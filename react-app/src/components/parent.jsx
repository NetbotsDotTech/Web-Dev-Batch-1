import React from "react";
import {Child1} from "./child1";

export const Parent = () => {
  const user = {
    name: "Saira",
    age: 20,
  };

  return (
    <div>
      <h1>Parent component</h1>
      <Child1 user={user} />
    </div>
  );
};

export default Parent;
