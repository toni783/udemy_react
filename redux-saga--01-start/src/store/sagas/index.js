import {
    takeEvery,
    all,
    takeLatest
} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'

import {
    logoutSaga,
    checkAuthTimeoutSaga,
    authUserSaga,
    authCheckStateSaga,
} from './auth'

import {
    initIngredientsSaga
} from './burgerBuilder'

import {
    purchaseBurgerSaga,
    fetchOrdersSaga
} from './order'
// export and syntax for only one saga to be used 
// export function* watchAuth() {
//     yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
//     yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
//     yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
//     yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
// }


// export and syntax for multiple sagas to be used and combined , using redux-saga operator all
export const watchAuth = [
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
]

export const watchBurgerBuilder = [
    takeEvery(actionTypes.INIT_FETCH_INGREDIENTS, initIngredientsSaga)
]

export const watchOrder = [
    takeLatest(actionTypes.PURCHASE_BURGER_PROCESS, purchaseBurgerSaga),
    takeEvery(actionTypes.FETCH_ORDERS_PROCESS, fetchOrdersSaga)

]

export function* rootSaga() {
    yield all([
        ...watchAuth,
        ...watchBurgerBuilder,
        ...watchOrder
    ])
}