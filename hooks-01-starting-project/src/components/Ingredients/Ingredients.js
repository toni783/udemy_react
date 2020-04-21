import React, { useReducer, useEffect, useCallback, useMemo } from 'react'

import IngredientForm from './IngredientForm'
import Search from './Search'
import IngredientList from './IngredientList'
import ErrorModal from '../UI/ErrorModal'

const ingredientReducer = (currentIngredients, action) => {
    switch (action.type) {
        case 'SET':
            return action.ingredients
        case 'ADD':
            return [...currentIngredients, action.ingredient]
        case 'DELETE':
            return currentIngredients.filter((ingredient) => {
                return ingredient.id !== action.id
            })
        default:
            throw new Error('Should not get here')
    }
}

const httpReducer = (curHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                loading: true,
                error: null,
            }
        case 'RESPONSE':
            return {
                ...curHttpState,
                loading: false,
            }
        case 'ERROR':
            return {
                loading: false,
                error: action.errorMessage,
            }
        case 'CLEAR':
            return {
                ...curHttpState,
                error: null,
            }

        default:
            throw new Error('Should not get here')
    }
}

const Ingredients = () => {
    const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null,
    })
    // const [userIngredients, setUserIngredients] = useState([])
    // const [isLoding, setIsLoding] = useState(false)
    // const [error, setError] = useState()
    // useEffect(() => {
    //     fetch('https://react-my-burger-36ace.firebaseio.com/ingredients-hooks.json')
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((resData) => {
    //             const loadedIngredients = []
    //             for (const key in resData) {
    //                 loadedIngredients.push({
    //                     id: key,
    //                     title: resData[key].title,
    //                     amount: resData[key].amount,
    //                 })
    //             }

    //             setUserIngredients(loadedIngredients)
    //         })
    // }, [])

    useEffect(() => {
        console.log('RENDERING INGREDIENTS', userIngredients)
    }, [userIngredients])

    const filteredIngredientsHandler = useCallback((filteredIngredients) => {
        dispatch({ type: 'SET', ingredients: filteredIngredients })
    }, [])

    const addIngredientHandler = useCallback((ingredient) => {
        dispatchHttp({ type: 'SEND' })
        fetch(
            'https://react-my-burger-36ace.firebaseio.com/ingredients-hooks.json',
            {
                method: 'POST',
                body: JSON.stringify(ingredient),
                headers: { 'Content-Type': 'application/json' },
            }
        ).then((res) => {
            dispatchHttp({ type: 'RESPONSE' })
            return res.json().then((resData) => {
                // setUserIngredients((prevIngredients) => {
                //     return [
                //         ...prevIngredients,
                //         {
                //             id: resData.name,
                //             ...ingredient,
                //         },
                //     ]
                // })
                dispatch({
                    type: 'ADD',
                    ingredient: {
                        id: resData.name,
                        ...ingredient,
                    },
                })
            })
        })
    }, [])

    const removeIngredientHandler = useCallback((ingredientId) => {
        dispatchHttp({ type: 'SEND' })
        fetch(
            `https://react-my-burger-36ace.firebaseio.com/ingredients-hooks/${ingredientId}.json`,
            {
                method: 'DELETE',
            }
        )
            .then(() => {
                dispatchHttp({ type: 'RESPONSE' })
                // setUserIngredients((prevIngredients) => {
                //     return prevIngredients.filter((ingredient) => {
                //         return ingredient.id !== ingredientId
                //     })
                // })

                dispatch({ type: 'DELETE', id: ingredientId })
            })
            .catch((err) => {
                dispatchHttp({ type: 'ERROR', errorMessage: err.message })
            })
    }, [])

    const cleanError = useCallback(() => {
        dispatchHttp({ type: 'CLEAR' })
    }, [])

    const ingredientList = useMemo(() => {
        return (
            <IngredientList
                ingredients={userIngredients}
                onRemoveItem={(ingredientId) => {
                    removeIngredientHandler(ingredientId)
                }}
            />
        )
    }, [userIngredients, removeIngredientHandler])
    return (
        <div className="App">
            {httpState.error && (
                <ErrorModal onClose={cleanError}>{httpState.error}</ErrorModal>
            )}
            <IngredientForm
                onAddIngredient={addIngredientHandler}
                loading={httpState.loading}
            />

            <section>
                <Search onLoadIngredients={filteredIngredientsHandler} />

                {ingredientList}
            </section>
        </div>
    )
}

export default Ingredients
