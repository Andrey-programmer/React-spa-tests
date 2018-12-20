import { CREATE_TEST_QUESTION, RESET_TEST_CREATION } from "./actionTypes"
import axios from '../../Axios/axios-test'


export function createTestQuestion(item) {
    return {
        type: CREATE_TEST_QUESTION,
        item
    }
}

export function resetTestCreation() {
    return {
      type: RESET_TEST_CREATION
    }
}

export function finishCreateTest() {
    console.log('finishCreateTest from action')  
    return async (dispatch, getState) => {
        // console.log('dispatch',dispatch)
        await axios.post('/tests.json',  getState().create.test)
        // console.log('getState', getState())  
        dispatch(resetTestCreation())
    }
    
}