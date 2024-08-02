import React, { Children } from "react";
import {Child2} from "./child2";

export const Child1 = ({user}) => {
  return (
    <div>
      <h2>Child1 Component</h2>
      <Child2 user={user} />
    </div>
  );
}

export default Child1;
