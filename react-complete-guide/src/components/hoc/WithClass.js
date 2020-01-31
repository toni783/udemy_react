import React from "react";

// RECOMMENDED  if we are going to have HOC that are going to change the html or css structure
const withClass = props => {
  return <div className={props.classes}> {props.children}</div>;
};

export default withClass;
