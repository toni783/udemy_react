import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    textLength: 0
  };
  changeLenthHandler = event => {
    console.log(event.target.value.length);
  };
  render() {
    return (
      <div className="App">
        <input onChange={this.changeLenthHandler} type="text" />
        <ValidationComponent
          textLength={this.state.textLength}
        ></ValidationComponent>
      </div>
    );
  }
}

export default App;
