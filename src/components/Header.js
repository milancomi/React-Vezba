import React from "react";
import logo from '../logo.svg';


export default class Header extends React.Component {   // Najbolje ovako zbog autocomplete
    render (){
      return (
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title" >{this.props.title}</h1>
  <div>{this.props.num}</div>
  <div>{JSON.stringify(this.props.myObj)} Stringfy</div>
  {/* <div>{this.props.myArr[0]} array </div>
  <div>{this.props.myObj.a} Object</div>
  <div>{this.props.myObj.b} object</div>
  <div>{this.props.myFunc(2,5)} Function</div>
  <div>{this.props.myFunc2(40,5)} Function 2</div>
  <div>{this.props.myFunc3(33,5)} Function 3</div> */}

</header>
  );
}
  }

