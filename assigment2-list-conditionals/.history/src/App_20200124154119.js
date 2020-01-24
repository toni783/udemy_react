import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  changeLenthHandler = event => {
    console.log(event.target.value.length);
  };
  render() {
    return (
      <div className="App">
        <input onChange={this.changeLenthHandler} type="text" />
        <ValidationComponent></ValidationComponent>
      </div>
    );
  }
}

export default App;
