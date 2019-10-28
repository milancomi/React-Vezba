import "./App.css";
import React, { Component } from "react";
import Body, { Body3, Body2 } from "./components/Body";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";

// import MyHeader from "./components/Header";

// const Body = () =>(
//   <p className="App-intro">
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
// );

// class Body extends Component {
//   render (){
//     return (
// <p className="App-intro">
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// );
// }
// }

class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  };

  // add2(a,b){
  //   return a+b;
  // }
  render() {

    return (

      <div className="App">
         <MyForm/>
      </div>


      // <div className="App">
      //   <div
      //     className={this.state.visible ? 'visible' : 'hidden'}
      //     style= {
      //       this.state.visible
      //        ?{}
      //        :{
      //       display:"none"
      //     }
      //   }
      //   >
      //     <Counter />
      //   </div>
      //   <button
      //     onClick={() => {
      //       this.setState({ visible: !this.state.visible });
      //     }}
      //   >
      //     Show Header
      //       </button>
      // </div>
    );

 



    // const add = (a, b) => a + b;

    // const buttonText= this.state.visible ? "hide" : "show";
    // let slider =  this.state.visible ? <ImageSlider /> : <Counter initialCount={50}/>
    // ;

    // if (this.state.whichComponentToShow === "ImageSlider") {
    //   return (
    //     <div className="App">
    //       <ImageSlider />
    //       <button
    //         onClick={() => {
    //           this.setState({ whichComponentToShow: "Counter" });
    //         }}
    //       >
    //         Show Counter
    //       </button>
    //     </div>
    //   );
    // } else if (this.state.whichComponentToShow === "Counter") {
    //   return (
    //     <div className="App">
    //       <Counter initialCount={50} />
    //       <button
    //         onClick={() => {
    //           this.setState({ whichComponentToShow: "Header" });
    //         }}
    //       >
    //         Show Header
    //       </button>
    //     </div>
    //   );
    // } else if (this.state.whichComponentToShow === "Header") {
    //   return (
    //     <div className="App">
    //       <button
    //         onClick={() => {
    //           this.setState({ whichComponentToShow: "Counter" });
    //         }}
    //       >
    //         Show Counter
    //       </button>
    //       <button
    //         onClick={() => {
    //           this.setState({ whichComponentToShow: "ImageSlider" });
    //         }}
    //       >
    //         Show Slider
    //       </button>
    //       <Header />
    //     </div>
    //   );
    // }

    // return null;
    /*    <div className="App">
      { <Header
      title="TESt"
       num={5} 
      myObj={{a:7,b:11}}
       myArr={[1,2,3]}
       myFunc={add}
       myFunc2={(a,b) =>a+b}
       myFunc3={this.add2}
       />

      <Body title="u funkciji props" />    
      <Body2 />   }
     { slider}

     <button
     onClick= {()=>{
       this.setState({visible: !this.state.visible}); // Suprtonu vrednost
    }}> {buttonText} </button>
            </div>

            */
  }
}

export default App;
