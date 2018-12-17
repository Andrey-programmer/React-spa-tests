import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://react-spa-tests.firebaseio.com/'
})