import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import { createStore, applyMiddleware } from 'redux';
//import ReduxPromise from 'redux-promise';
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
//import reducers from './reducers';
import configureStore from './configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
