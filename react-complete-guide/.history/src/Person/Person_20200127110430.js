import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person" style={style}>
      <p onClick={props.clicked}>
        i am {props.name} and i am {props.age} years old{" "}
      </p>
      <p> {props.children} </p>

      <input onChange={props.changed} value={props.name} type="text" />
    </div>
  );
};

export default Radium(person);
