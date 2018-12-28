import { AUTH_SUCCESS, AUTH_LOGOUT, ERROR_MESSAGE, ASYNC_CALL } from "../actions/actionTypes";

const initialState = {
    token: null,
    async_call: false
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS: 
            return {
                ...state, token: action.token
            } 
        case AUTH_LOGOUT: 
            return {
                ...state, token: null, async_call: false
            }
        case ERROR_MESSAGE:
            return {
                ...state
            }
        case ASYNC_CALL: 
            return {
                ...state, async_call: action.async_call
            } 
        default: 
            return state
    }
}