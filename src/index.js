import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// setting global configs
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; 
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Do something before request is sent
    return request;
}, error => {
    console.log(error);
    // Do something with request error
    // error related to sending requests like internet failure
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    console.log(response);
     // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response; // returns to then block
}, error => {
    console.log(error);
     // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
