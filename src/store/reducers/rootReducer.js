import {combineReducers} from 'redux'
import testReducer from './test'
import createReducer from './create'

export default combineReducers({
    test: testReducer,
    create: createReducer
})