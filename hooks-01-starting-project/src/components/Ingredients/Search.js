import React, { useState, useEffect, useRef } from 'react'

import Card from '../UI/Card'
import './Search.css'

const Search = React.memo((props) => {
    const { onLoadIngredients } = props
    const [enteredFilter, setEnteredFilter] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            // conditional added because enteredFilter its a clousure created by javascript with the setTimeout, so it will only have the value at the
            // time the timeOut its created ,but inputRef will have the latest value so it will be different that the previously used one and allows
            // to have the correct logic
            if (enteredFilter === inputRef.current.value) {
                const query =
                    enteredFilter.length === 0
                        ? ''
                        : `?orderBy="title"&equalTo="${enteredFilter}"`
                fetch(
                    'https://react-my-burger-36ace.firebaseio.com/ingredients-hooks.json' +
                        query
                )
                    .then((res) => {
                        return res.json()
                    })
                    .then((resData) => {
                        const loadedIngredients = []
                        for (const key in resData) {
                            loadedIngredients.push({
                                id: key,
                                title: resData[key].title,
                                amount: resData[key].amount,
                            })
                        }

                        onLoadIngredients(loadedIngredients)
                    })
            }
        }, 500)

        // clean up function
        return () => {
            clearTimeout(timer)
        }
    }, [enteredFilter, onLoadIngredients, inputRef])

    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input
                        ref={inputRef}
                        type="text"
                        value={enteredFilter}
                        onChange={(event) => setEnteredFilter(event.target.value)}
                    />
                </div>
            </Card>
        </section>
    )
})

export default Search
