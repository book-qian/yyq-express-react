import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducer from './reducers'

export default createStore(allReducer, composeWithDevTools())
