import React, { Component } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate..");

    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }

    // DO: decide wheter or not we should continue with the render

    // DON`T: cause side effects
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate..");
    return { message: "Snapshot!" };

    // DO: last minute DOM operations. Example: Get previous scroll position,etc...

    // DON`T: cause side effects
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate..");
    console.log(snapshot);
    // DO: Cause Side Effects
    // DON`T: update the state (triggers re-render)
  }
  render() {
    // DO: prepare and structure our JSX code

    // DON`T: add any code that will stop the rendering process .Ex: http request ,time outs ,etc...
    console.log("[Persons.js] rendering..");

    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={event => this.props.changed(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount..");

    // DO: clean up code ,run any code that needs to be executed before the component its removed
  }
}

export default Persons;
