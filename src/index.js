import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import api from './reducers/index';
import APIApp from './components/APIAPP';
import dataService from './services/api-service';
import { Provider } from 'react-redux';

const api_store = createStore(api, {}, applyMiddleware(dataService));
const root = document.getElementById('root');

//add comment here
///add more things here.....
//<html>test</html>
const render = () => ReactDOM.render(

    <Provider store={api_store}>
        <APIApp />
    </Provider>, root


)

render();


api_store.dispatch({type: 'GET_DATA'});


