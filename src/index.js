import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore ,combineReducers,applyMiddleware} from 'redux';
import WorkReducer from './store/reducers/work'
import ScrollToTop from './app/utils/ScrollToTop'


const rootReducer = combineReducers({
    work: WorkReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk));
let render = () => {
    ReactDOM.render(
        <Provider store = {store}>
            <BrowserRouter>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>, document.getElementById('root')
    );
}


if(module.hot){
    module.hot.accept('./app/layout/App',() => setTimeout(render))
}

render();
serviceWorker.unregister();
