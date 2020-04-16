import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value,
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.value,
            }

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter,
                }),
            }

        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter((result) => {
                return result.id !== action.resultId
            })
            return {
                ...state,
                results: updatedResults,
            }

        default:
            return state
    }
}

export default reducer
