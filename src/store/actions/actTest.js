import Axios from '../../Axios/axios-test'
import { FETCH_TESTS_START, FETCH_TESTS_SUCCESS, FETCH_TESTS_ERROR } from './actionTypes';
 
export function fetchTests() {
    return async dispatch => {
        dispatch(fetchTestsStart())
        
        try {
            const tests = []
            const response = await Axios.get('/tests.json')

            Object.keys(response.data).forEach((id, index) => {
                tests.push({
                    id,
                    name: `Тест №${index + 1}`
                })
            })
            console.log('Data from actTest', response.data)

            dispatch(fetchTestsSuccess(tests))
        } catch(error) {
            dispatch(fetchTestsError(error))
        }
    }
}

export function fetchTestsStart() {
    return {
        type: FETCH_TESTS_START
    }
}

export function fetchTestsSuccess(tests) {
    return {
        type: FETCH_TESTS_SUCCESS,
        tests
    }
}

export function fetchTestsError(error) {
    return {
        type: FETCH_TESTS_ERROR,
        error
    }
}