import React, { Component } from 'react'

class Course extends Component {
    render() {
        console.log(this.props)
        // method that extracts the url search params
        const title = new URLSearchParams(this.props.location.search).get('name')
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Course
