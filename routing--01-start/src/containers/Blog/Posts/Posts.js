import React, { Component, Fragment } from 'react'
import axios from '../../../axios'
import './Posts.css'
import Post from '../../../components/Post/Post'
import { Route } from 'react-router'
import FullPost from '../FullPost/FullPost'
// import { Link } from 'react-router-dom'
class Posts extends Component {
    state = {
        posts: [],
    }
    postSelectedHandler = (id) => {
        // redirect programatically
        // this.props.history.push(`posts/${id}`)
        this.props.history.push({ pathname: `posts/${id}` })
    }

    componentDidMount() {
        axios
            .get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Gilbert',
                    }
                })
                this.setState({ posts: updatedPosts })
                // console.log( response );
            })
            .catch((error) => {
                console.log(error)
                // this.setState({ error: true })
            })
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    // <Link to={`posts/${post.id}`} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                    // </Link>
                )
            })
        }
        return (
            <Fragment>
                <section className="Posts">{posts}</section>
                <Route path={`${this.props.match.url}/:id`} component={FullPost} />
            </Fragment>
        )
    }
}

export default Posts
