import React, { Fragment } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => {
  return (
    <Fragment>
      <div>Toolbar ,sidedrawer ,backdrop </div>
      <Toolbar/>
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
