import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ConfigureStore from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import './css/toDo.css'

const store = ConfigureStore()


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))