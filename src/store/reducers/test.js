const initialState = {
    tests: [],
    loading: false,
    error: null,
    results: {}, 
    rightAnswer: null,
    activeQuestion: 0,
    isFinished: false,
    test: null,
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
        case 'FETCH_TEST_SUCCESS': 
            return {
                ...state, loading: false, test: action.test
            }
        default: return state
    }
    
}
