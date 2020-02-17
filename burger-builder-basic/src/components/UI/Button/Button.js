import React from "react";
import clasess from "./Button.module.css";
const button = props => {
  return (
    <button
      className={[clasess.Button, clasess[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
