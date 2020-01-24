import React from "react";

const validationComponent = props => {
  return (
    <div>
      <p>{props.textLength}</p>

      {props.textLength > 5 ? <p>Text is to long</p> : <p>Text is to short</p>}
    </div>
  );
};

export default validationComponent;
