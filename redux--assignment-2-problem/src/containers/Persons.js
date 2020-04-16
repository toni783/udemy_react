import React, { Component } from 'react'

import Person from '../components/Person/Person'
import AddPerson from '../components/AddPerson/AddPerson'
import { connect } from 'react-redux'
import * as actionType from '../store/action'

class Persons extends Component {
    state = {
        persons: [],
    }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor(Math.random() * 40),
    //     }
    //     this.setState((prevState) => {
    //         return { persons: prevState.persons.concat(newPerson) }
    //     })
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState((prevState) => {
    //         return {
    //             persons: prevState.persons.filter(
    //                 (person) => person.id !== personId
    //             ),
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map((person) => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personAddedHandler: (name, age) => {
            dispatch({ type: actionType.ADD_PERSON, payload: { name, age } })
        },
        personDeletedHandler: (personId) => {
            dispatch({ type: actionType.DELETE_PERSON, personId })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
