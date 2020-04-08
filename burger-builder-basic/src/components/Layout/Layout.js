import React, { Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import { Component } from 'react'
import ToggleContext from '../../context/toggle-context'

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }
    sideDrawerCloseHandler = () => {
        this.setState((prevState => {
            return { showSideDrawer: !prevState.showSideDrawer }
        }))
    }
    render() {
        return (
            <ToggleContext.Provider
                value={{
                    showSideDrawer: this.state.showSideDrawer,
                    onToggle: this.sideDrawerCloseHandler,
                }}
            >
                <Fragment>
                    <div>Toolbar ,sidedrawer ,backdrop </div>
                    <Toolbar />
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerCloseHandler}
                    />
                    <main className={classes.Content}>{this.props.children}</main>
                </Fragment>
            </ToggleContext.Provider>
        )
    }
}

export default Layout
