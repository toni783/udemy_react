import React, { useState, useEffect, useRef } from 'react'

import Card from '../UI/Card'
import './Search.css'
import useHttp from '../../hooks/http'
import ErrorModal from '../UI/ErrorModal'

const Search = React.memo((props) => {
    const { onLoadIngredients } = props
    const [enteredFilter, setEnteredFilter] = useState('')
    const inputRef = useRef()
    const { isLoading, data, error, sendRequest, clear } = useHttp()
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

                sendRequest(
                    'https://react-my-burger-36ace.firebaseio.com/ingredients-hooks.json' +
                        query,
                    'GET'
                )
            }
        }, 500)

        // clean up function
        return () => {
            clearTimeout(timer)
        }
    }, [enteredFilter, inputRef, sendRequest])

    useEffect(() => {
        if (!isLoading && !error && data) {
            const loadedIngredients = []
            for (const key in data) {
                loadedIngredients.push({
                    id: key,
                    title: data[key].title,
                    amount: data[key].amount,
                })
            }

            onLoadIngredients(loadedIngredients)
        }
    }, [data, isLoading, error, onLoadIngredients])
    return (
        <section className="search">
            {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    {isLoading && <span>...Loading</span>}
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
