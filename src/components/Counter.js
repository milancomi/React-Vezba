import React from "react";
import { prependToMemberExpression } from "@babel/types";

export default class Counter extends React.Component {


  componentWillUnmount(){
    console.log("unmounting...");
}

componentDidMount(){
    console.log("mounting...");
}


    render() {
    return (
      <div>
        <div>Count: {this.props.count}</div>
        <button onClick={this.props.dodaj}>Dodaj</button>
        <button onClick={this.props.oduzmi}>Oduzmi</button>

      </div>
    );
  }
}
