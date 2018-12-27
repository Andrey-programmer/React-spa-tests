import Axios from '../../Axios/axios-test'
import { 
    FETCH_TESTS_START, 
    FETCH_TESTS_SUCCESS, 
    FETCH_TESTS_ERROR, 
    TEST_SET_STATE, 
    FETCH_TEST_SUCCESS, 
    FINISH_TEST, 
    TEST_NEXT_QUESTION,
    TEST_RETRY
} from './actionTypes';
 
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


export function fetchTestById(testId) {
    return async dispatch => {
        dispatch(fetchTestsStart())

        try {
            const response = await Axios.get(`/tests/${testId}.json`)
            
            const test = response.data
      
           
            dispatch(fetchTestSuccess(test))
            // console.log(test) 
      
          } catch(error) {
            dispatch(fetchTestsError(error))
          }
    }
}

export function finishTest() {
    return {
        type: FINISH_TEST
    }
}

export function fetchTestSuccess(test) {
    return {
        type: FETCH_TEST_SUCCESS,
        test
    }
}

export function testSetState(answerState, results) {
    return {
        type: TEST_SET_STATE,
        answerState,
        results
    }
}


export function testNextQuestion(number) {
    return {
        type: TEST_NEXT_QUESTION,
        number
    }
}


export function retryTest() {
    return {
        type: TEST_RETRY
    }
}


export function testAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().test 

        if (state.rightAnswer) {
            const key = Object.keys(state.rightAnswer)[0]
            if (state.rightAnswer[key] === 'success') {
               return 
            } 
          }
          const results = state.results
          const question = state.test[state.activeQuestion]
            console.log('question' , question.rightAnswerId, answerId)
          if (parseInt(question.rightAnswerId) === answerId) {
            console.log('Всё верно!')
            if (!results[question.id]) {
              results[question.id] = 'success'
            }
      
            dispatch(testSetState({[answerId]: 'success'}, results))
      
            setTimeout(() => {
                if (isTestFinished(state)) {
                  console.log('Test finished')

                  dispatch(finishTest())
                  console.log('==========')
                } else {

                    dispatch(testNextQuestion(state.activeQuestion + 1))
                 
                }      
            }, 1000);
                  
          } else {
            results[question.id] = 'error'
            dispatch(testSetState({[answerId]: 'error'}, results))

          }
    }
}

function isTestFinished(state) {
    return state.activeQuestion + 1 === state.test.length   
}

