import React from "react";
import { CompB } from "./CompB";

export default function CompA() {
  const Data = "Hello From Component A";
  return (
    <React.Fragment>
      <div>CompA</div>
      <CompB data ={Data} />
    </React.Fragment>
  );
}
