const initialState = {
    tests: [],
    loading: false,
    error: null
}

export default function testReducer(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_TESTS_START': 
            return {
                ...state, loading: true
            }
        case 'FETCH_TESTS_SUCCESS': 
            return {
                ...state, loading: false, tests: action.tests
            }
        case 'FETCH_TESTS_ERROR': 
            return {
                ...state, loading: false, error: action.error
            }
        default: return state
    }
    
}