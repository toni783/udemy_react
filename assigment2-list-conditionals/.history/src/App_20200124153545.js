import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  changeLenthHandler = event => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="App">
        <input onChange={this.changeLenthHandler} type="text" />
      </div>
    );
  }
}

export default App;
