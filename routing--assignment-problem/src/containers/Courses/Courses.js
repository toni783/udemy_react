import React, { Component, Fragment } from 'react'

import './Courses.css'
import { Link, Route } from 'react-router-dom'
import Course from '../Course/Course'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' },
        ],
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {this.state.courses.map((course) => {
                            return (
                                <Link
                                    key={course.id}
                                    to={`${this.props.match.url}/${course.id}?name=${course.title}`}
                                >
                                    <article className="Course">
                                        {course.title}
                                    </article>
                                </Link>
                            )
                        })}
                    </section>
                </div>
                <Route path={`${this.props.match.url}/:id`} component={Course} />
            </Fragment>
        )
    }
}

export default Courses
