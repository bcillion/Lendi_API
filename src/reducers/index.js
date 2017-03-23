import { combineReducers } from 'redux'
import items from './api';
import loading from './loading';

const apiApp = combineReducers({
    items,
    loading
})

export default apiApp