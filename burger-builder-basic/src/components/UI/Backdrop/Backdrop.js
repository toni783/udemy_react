import React from "react";
import clasess from "./Backdrop.module.css";
const backdrop = props => {
  return props.show ? (
    <div onClick={props.clicked} className={clasess.Backdrop}></div>
  ) : null;
};

export default backdrop;
