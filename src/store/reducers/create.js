const initialState = {
    test: []
}

export default function createReducer(state = initialState, action) {
    switch(action.type) {
        case 'CREATE_TEST_QUESTION': 
            return {
                ...state,
                test: [...state.test, action.item]
            }
        case 'RESET_TEST_CREATION': 
            return {
                ...state,
                test: []
            }
        default: 
            return state
    } 
}