import React, { Component } from "react";
import "./App.css";

class App extends Component {
  changeLenthHandler = event => {
    console.log(event.target.value.length);
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
