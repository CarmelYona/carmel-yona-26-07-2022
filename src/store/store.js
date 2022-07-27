
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { contactReducer } from './reducer/contact.reducer.js'

import { userReducer } from './reducer/user.reducer.js'

const rootReducer = combineReducers({
    userModule: userReducer,
    contactModule: contactReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


