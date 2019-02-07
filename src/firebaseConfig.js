import firebase from 'firebase';
import "firebase/auth"
import "firebase/storage"
import "firebase/database"
import {firebase_server_config} from './globalConfig'

let config = {
    apiKey: firebase_server_config.API_KEY,
    authDomain: "gohelpearn.firebaseapp.com",
    databaseURL: "https://gohelpearn.firebaseio.com",
    projectId: "gohelpearn",
    storageBucket: "gohelpearn.appspot.com",
    messagingSenderId: firebase_server_config.messagingSenderId
};
firebase.initializeApp(config);
firebase.firestore()


export default firebase