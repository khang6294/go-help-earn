import * as actionTypes from './actionTypes'
import firebase from '../../firebaseConfig'
import {getFirestore} from 'redux-firestore'
import {closeModal} from './modal'

export const register = (registerInfo) => {
    return (dispatch) => {
        const firestore = getFirestore();
        firebase
            .auth()
            .createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)
            .then(createdUser => {
                createdUser.user.updateProfile({
                    displayName: registerInfo.name,
                })
                let newUser = {
                    displayName: registerInfo.name,
                    createdAt: firestore.FieldValue.serverTimestamp()
                }
                firestore.set(`users/${createdUser.user.uid}`, {...newUser})
                    .then(() => {
                        dispatch(closeModal());
                    })
                    .catch(err => {
                        dispatch({type: actionTypes.REGISTER_FAIL,payload:err})
                    });
                
            })
            .catch(err => {
                dispatch({type: actionTypes.REGISTER_FAIL,payload:err})
            });
    }
}

export const login = (loginInfo) => {
    return dispatch => {
        firebase
            .auth()
            .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
            .then(() => {
                dispatch(closeModal())
            })
            .catch(err => {
                dispatch({type: actionTypes.LOGIN_FAIL,payload:err})
            });
    }
}

export const resetErr = () => {
    return {
        type: actionTypes.RESET_ERR,
    }
}


