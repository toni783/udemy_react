import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

import { Provider } from 'react-redux'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})

//setup for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('[middleware] dispatching ', action)
            const result = next(action)
            console.log('[middleware] next state ', store.getState())
            return result
        }
    }
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
