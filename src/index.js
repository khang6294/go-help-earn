import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';


let render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}


if(module.hot){
    module.hot.accept('./app/layout/App',() => setTimeout(render))
}

render();
serviceWorker.unregister();
