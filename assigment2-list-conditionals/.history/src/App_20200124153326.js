import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  changeLenthHandler = () => {};
  render() {
    return (
      <div className="App">
        <input onChange={this.changeLenthHandler} type="text" />
      </div>
    );
  }
}

export default App;
