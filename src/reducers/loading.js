import {LoadingConstants} from '../constants/LoadingConstants.js';


const loading = (state = false, action) => {
    switch (action.type) {
        case LoadingConstants.GET_DATA:
            return true
        case LoadingConstants.GET_DATA_RECEIVED:
            return false
        case LoadingConstants.GET_DATA_ERROR:
            return false
        default:
            return state
    }
}

export default loading