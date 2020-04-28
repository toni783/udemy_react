import { useReducer, useCallback } from 'react'
const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null,
}
const httpReducer = (curHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                loading: true,
                error: null,
                data: null,
                extra: null,
                identifier: action.identifier,
            }
        case 'RESPONSE':
            return {
                ...curHttpState,
                loading: false,
                data: action.responseData,
                extra: action.extra,
            }
        case 'ERROR':
            return {
                loading: false,
                error: action.errorMessage,
            }
        case 'CLEAR':
            return initialState

        default:
            throw new Error('Should not get here')
    }
}

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState)
    const sendRequest = useCallback((url, method, body, extra, identifier) => {
        dispatchHttp({ type: 'SEND', identifier })
        fetch(url, {
            method,
            body,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                dispatchHttp({ type: 'RESPONSE', responseData, extra })
            })
            .catch((err) => {
                dispatchHttp({ type: 'ERROR', errorMessage: err.message })
            })
    }, [])

    const clear = useCallback(() => {
        dispatchHttp({ type: 'CLEAR' })
    }, [])

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear: clear,
    }
}

export default useHttp
