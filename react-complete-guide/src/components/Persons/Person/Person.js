import React, { Component } from "react";

import classes from "./Person.css";

class Person extends Component {
  // used for displaying test error
  // const rnd = Math.random();

  // if ( rnd > 0.7 ) {
  //     throw new Error( 'Something went wrong' );
  // }
  render() {
    // DO: prepare and structure our JSX code

    // DON`T: add any code that will stop the rendering process .Ex: http request ,time outs ,etc...
    console.log("[Person.js] rendering..");

    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
