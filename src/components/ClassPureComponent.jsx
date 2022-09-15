import React from "react";
import { PureComponent } from "react";

export default class ClassPureComponent extends PureComponent {
  render() {
    console.log("this is class component");
    return <div>Class Pure Component</div>;
  }
}
