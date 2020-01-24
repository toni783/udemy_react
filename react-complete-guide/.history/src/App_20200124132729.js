// class based approach
import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Gilbert",
        age: 28
      },
      {
        name: "Yayu",
        age: 25
      }
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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: "Gilbert",
          age: 28
        },
        {
          name: event.target.value,
          age: 25
        }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>hi </h1>
        <p>this works </p>

        <button
          style={style}
          onClick={() => this.switchNameHandler("Gilbert with arrow function ")}
        >
          {" "}
          Switch Name{" "}
        </button>

        <Person
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
        </Person>
      </div>
    );
  }
}

export default App;

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
