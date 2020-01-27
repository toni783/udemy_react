// class based approach
import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";

import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Gilbert", age: 28 },
      { id: 2, name: "Yayu", age: 25 },
      { id: 3, name: "Vianel", age: 25 }
    ],
    otherProperty: "anything can be here ",
    showPersons: false
  };

  switchNameHandler = name => {
    // console.log('button clicked')
    this.setState({
      persons: [
        {
          name: name,
          age: 28
        },
        {
          name: "Yayu edited",
          age: 25
        }
      ]
    });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(value => {
      return value.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const toggle = this.state.showPersons;
    this.setState({
      showPersons: !toggle
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* <Person
            clicked={this.switchNameHandler.bind(this, "Gilbert with binding")}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
          >
            {" "}
            and the inner content is this{" "}
          </Person> */}

          {this.state.persons.map((person, index) => {
            return (
              <Person
                clicked={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );

      style.backgroundColor = "red";

      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const clasess = [];
    if (this.state.persons.length <= 2) {
      clasess.push("red");
    }

    if (this.state.persons.length <= 1) {
      clasess.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>hi </h1>
          <p className={clasess.join(" ")}>this works </p>

          <button
            key="buttonHover"
            style={style}
            onClick={() =>
              this.switchNameHandler("Gilbert with arrow function ")
            }
          >
            {" "}
            Switch Name{" "}
          </button>

          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle persons
          </button>
          {persons}

          {/* turnary approach */}
          {/* {this.state.showPersons ? (
          <div>
            <Person
              clicked={this.switchNameHandler.bind(
                this,
                "Gilbert with binding"
              )}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />

            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler}
            >
              {" "}
              and the inner content is this{" "}
            </Person>
          </div>
        ) : null} */}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

// functional  based approach
// import React, { useState } from 'react';
// import './App.css';

// import Person from './Person/Person'

//  const app = props => {

//   const [personState, setPersonState] = useState(
//     {
//       persons: [
//         {
//           name: 'Gilbert',
//           age: 28
//         },
//         {
//           name: 'Yayu',
//           age: 25
//         }
//       ],
//      otherProperty: 'anything can be here '
//     }
//   );

//   const [otherState, setOtherState] =  useState({  otherProperty: 'anything can be here in other state '});

//   const switchNameHandler = () =>{
//     // console.log('button clicked')
//     setPersonState(
//       {
//         persons: [
//           {
//             name: 'Gilbert edited',
//             age: 28
//           },
//           {
//             name: 'Yayu edited',
//             age: 25
//           }
//         ]
//       }
//     );
//   }

// console.log(personState, otherState)

//     return (
//       <div className="App">
//            <h1>hi </h1>
//           <p>this works </p>

//           <button onClick={switchNameHandler}> Switch Name  </button>

//           <Person name={personState.persons[0].name} age={personState.persons[0].age}/>

//           <Person name={personState.persons[1].name} age={personState.persons[1].age}> and the inner content is this </Person>

//       </div>
//     );

// }

// export default app;
