import * as actionTypes from './actionTypes'


// action creator that will have the action in our app
export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    }
}

// action async handler ,in this case just a example with a timeout 
export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // get state allow us to acess the global state with redux-thunk
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter)
            dispatch(saveResult(result))

        }, 2000);
    }
}
export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId
    }
}