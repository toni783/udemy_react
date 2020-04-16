import React, { Component, Fragment } from 'react'
// import axios from 'axios';

import './Blog.css'
import Posts from './Posts/Posts'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost'

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    state = {
        auth: true,
    }
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/posts"
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?quick-submit=true',
                                    }}
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {
                    /* <Route
                    path="/"
                    exact
                    render={() => {
                        return <h1>home</h1>
                    }}
                /> */
                    <Switch>
                        {this.state.auth ? (
                            <Route path="/new-post" component={AsyncNewPost} />
                        ) : null}
                        <Route path="/posts" component={Posts} />

                        {/* //different ways of redirect  */}
                        <Route
                            render={() => {
                                return <h1> Error not found !!</h1>
                            }}
                        />
                        {/* <Redirect from="/" to="/posts" /> */}
                        {/* //different ways of redirect  */}
                    </Switch>
                }
            </div>
        )
    }
}

export default Blog