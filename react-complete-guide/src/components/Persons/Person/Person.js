import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux";
import classes from "./Person.css";
import withClass from "../../hoc/withClass";
import AuthContext from "../../../context/auth-context";
class Person extends Component {
  // used for displaying test error
  // const rnd = Math.random();

  // if ( rnd > 0.7 ) {
  //     throw new Error( 'Something went wrong' );
  // }

  static contextType = AuthContext; // using context approach  with react >= 16.6

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); // new approach for ref ,React version > 16.2
  }
  render() {
    // DO: prepare and structure our JSX code

    // DON`T: add any code that will stop the rendering process .Ex: http request ,time outs ,etc...
    console.log("[Person.js] rendering..");

    return (
      // react 16.2 > approach with Fragment,same as hoc Aux.js
      // <Fragment>
      //   <p onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} years old!
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input
      //     type="text"
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </Fragment>
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in!</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }} // old approach for ref  ,React version < 16.2
          ref={this.inputElementRef} // new approach for ref ,React version > 16.2
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }

  componentDidMount() {
    // this.inputElement.focus(); // old approach  for ref,React version < 16.2
    this.inputElementRef.current.focus(); // new approach for ref,React version > 16.2
    console.log(this.context.authenticated);
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.App);
