import React from "react";

const charComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };
  return <div style={style}> {props.inputText}</div>;
};

export default charComponent;
