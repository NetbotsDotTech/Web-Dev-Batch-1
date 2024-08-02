import React, { Children } from "react";
import {Grandchild} from "./Grandchild";

export const Child2 = ({user}) => {
  return (
    <div>
      <h3>Child2 Component</h3>
      <Grandchild user={user} />
    </div>
  );
};

export default Child2;
