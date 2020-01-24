import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.clicked}>
        i am {props.name} and i am {props.age} years old{" "}
      </p>
      <p> {props.children} </p>

      <input onChange={props.changed} type="text" />
    </div>
  );
};

export default person;
