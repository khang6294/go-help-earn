import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


let render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        , document.getElementById('root')
    );
}


if(module.hot){
    module.hot.accept('./app/layout/App',() => setTimeout(render))
}

render();
serviceWorker.unregister();
