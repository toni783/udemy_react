import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textLength: 0
  };
  changeLenthHandler = event => {
    this.setState({
      textLength: event.target.value.length
    });
  };
  render() {
    return (
      <div className="App">
        <input onChange={this.changeLenthHandler} type="text" />
        <ValidationComponent
          textLength={this.state.textLength}
        ></ValidationComponent>

        <CharComponent />
      </div>
    );
  }
}

export default App;
