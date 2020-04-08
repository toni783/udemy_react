import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Menu from '../../Menu/Menu'
const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <Menu />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.DesktopOnly}>
                <NavigationItems />
            </div>
        </header>
    )
}

export default toolbar
