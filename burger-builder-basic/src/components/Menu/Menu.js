import React from 'react'
import classes from './Menu.module.css'
import ToggleContext from '../../context/toggle-context'
const menu = () => {
    return (
        <ToggleContext.Consumer>
            {(context) => {
                return (
                    <div onClick={context.onToggle} className={classes.Menu}>
                        <div className={classes.MenuBar}></div>
                        <div className={classes.MenuBar}></div>
                        <div className={classes.MenuBar}></div>
                    </div>
                )
            }}
        </ToggleContext.Consumer>
    )
}

export default menu
