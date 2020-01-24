import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textLength: 0,
    text: []
  };
  changeLenthHandler = event => {
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value.split(""),
      inputText: ""
    });
  };

  deleteNameHandler = index => {};
  render() {
    return (
      <div className="App">
        <input
          value={this.state.inputText}
          onChange={this.changeLenthHandler}
          type="text"
        />
        <ValidationComponent
          textLength={this.state.textLength}
        ></ValidationComponent>

        {this.state.text.map((value, index) => {
          return (
            <CharComponent
              deleteName={this.deleteNameHandler}
              inputChar={value}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
