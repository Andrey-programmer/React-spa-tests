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
        case 'TEST_SET_STATE': 
            return {
                ...state, rightAnswer: action.answerState, results: action.results
            }
        case 'FINISH_TEST': {
            return {
                ...state, isFinished: true
            }
        }
        case 'TEST_NEXT_QUESTION': 
            return {
                ...state, rightAnswer: null, activeQuestion: action.number
            }
        case 'TEST_RETRY' : 
            return {
                ...state,
                activeQuestion: 0,
                rightAnswer: null,
                isFinished: false,
                results: {}
            }
       
        default: return state
    }
    
}
