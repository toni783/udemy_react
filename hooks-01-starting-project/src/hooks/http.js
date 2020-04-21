import { useReducer } from 'react'

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

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null,
    })
    const sendRequest = (url, method, body) => {
        dispatchHttp({ type: 'SEND' })
        fetch(url, {
            method,
            body,
            headers: {
                'Content-Type': 'application/json',
            },
        })
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
    }
}

export default useHttp
