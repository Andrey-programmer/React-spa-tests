import {combineReducers} from 'redux'
import testReducer from './test'
import createReducer from './create'
import authReducer from './auth';

export default combineReducers({
    test: testReducer,
    create: createReducer,
    auth: authReducer
})