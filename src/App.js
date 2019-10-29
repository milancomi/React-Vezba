import "./App.css";
import React, { Component } from "react";
import ValidationForm from "./components/ValidationForm";
import Login from "./components/validationTest";
import FetchRandomUser from "./components/FetchRandomUser";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    count: 0
  };

  dodaj = () => {
    console.log("button clicked");
    console.log(this.state);
    // this.state +=1; // NE RADI

    this.setState({
      count: this.state.count + 1
    });
  }; // Ovako radi

  oduzmi = () => {
    this.setState({
      count: this.state.count - 1
    });
  }; // Ovako radi

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          dodaj={this.dodaj}
          oduzmi={this.oduzmi}
        />
        <Counter
          count={this.state.count}
          dodaj={this.dodaj}
          oduzmi={this.oduzmi}
        />
      </div>
    );
  }
}

export default App;
