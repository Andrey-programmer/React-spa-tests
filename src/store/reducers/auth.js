import { AUTH_SUCCESS, AUTH_LOGOUT, ERROR_MESSAGE } from "../actions/actionTypes";

const initialState = {
    token: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS: 
            return {
                ...state, token: action.token
            } 
        case AUTH_LOGOUT: 
            return {
                ...state, token: null
            }
        case ERROR_MESSAGE:
            return {
                ...state, message: action.message
            }
        default: 
            return state
    }
}