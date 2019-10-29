import React from "react";
import { prependToMemberExpression } from "@babel/types";

export default class Counter extends React.Component {


    // constructor(props){ 
    //     super(props);

    //     this.state= {
    //         count: props.initialCount
    //     }
    // }

    // handleButtonClick(){
    //     console.log("button clicked");
    //     console.log(this.state);
    // } Ne moze jer nije bindovano





        state = {
            count: 0
        };
    

  componentWillUnmount(){
    console.log("unmounting...");
}

componentDidMount(){
    console.log("mounting...");
}


dodaj = () =>{
        console.log("button clicked");
        console.log(this.state);
        // this.state +=1; // NE RADI

        this.setState({
            count: this.state.count +1
        });

}  // Ovako radi


oduzmi = () =>{
    this.setState({
        count: this.state.count -1
    });

}  // Ovako radi


    render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.dodaj}>Dodaj</button>
        <button onClick={this.oduzmi}>Oduzmi</button>

      </div>
    );
  }
}
