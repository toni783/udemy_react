import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  // hook added for life cycle in functional component
  useEffect(() => {
    console.log("[Cockpit.js useEffect hook]");
    // can do http requests...

    setTimeout(() => {
      alert("save data to cloud ");
    }, 1000);
  }, [props.persons]); // trigger alert only if the persons prop its changed

  useEffect(() => {
    console.log("[Cockpit.js useEffect hook]");
    // can do http requests...

    setTimeout(() => {
      alert("save data to cloud ");
    }, 1000);
  }, []); // trigger alert only at the beginning of the render
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
