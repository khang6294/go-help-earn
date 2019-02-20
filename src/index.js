import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore ,combineReducers,applyMiddleware,compose} from 'redux';
import WorkReducer from './store/reducers/work'
import ScrollToTop from './app/utils/ScrollToTop'
import {reactReduxFirebase,getFirebase,firebaseReducer} from 'react-redux-firebase'
import {reduxFirestore,getFirestore,firestoreReducer} from 'redux-firestore'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import {reducer as toastrReducer} from 'react-redux-toastr';
import ModalReducer from '../src/store/reducers/modal'
import AuthReducer from '../src/store/reducers/auth'
import firebase from './firebaseConfig'

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false
};

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    toastr: toastrReducer,
    work: WorkReducer,
    modal: ModalReducer,
    auth: AuthReducer
})

export const store = createStoreWithFirebase(rootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})));
let render = () => {
    ReactDOM.render(
        <Provider store = {store}>
            <BrowserRouter>
                <ScrollToTop>
                    <ReduxToastr
                        position='bottom-right'
                        transitionIn='fadeIn'
                        transitionOut='fadeOut'
                    />
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
