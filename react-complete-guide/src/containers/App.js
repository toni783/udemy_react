import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../components/hoc/withClass";
import Aux from "../components/hoc/Aux";

import AuthContext from "../context/auth-context";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    // we can add our initial state here but its not required since can be done outside and automatically will be added here behend the scenes
  }
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    }); // update state that depend of a previous state
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  componentDidMount() {
    console.log("[App.js] componentDidMount");
    // DO: cause side effects

    // DON`T: update the state (triggers re-render)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");

    // DO: decide wheter or not we should continue with the render

    // DON`T: cause side effects
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");

    // DO: Cause Side Effects
    // DON`T: update the state (triggers re-render)
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    // DO: prepare and structure our JSX code

    // DON`T: add any code that will stop the rendering process .Ex: http request ,time outs ,etc...
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          ></Persons>
        </div>
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({
              showCockpit: false
            });
          }}
        >
          Remove Cockpit{" "}
        </button>

        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            >
              {" "}
            </Cockpit>
          ) : null}

          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
