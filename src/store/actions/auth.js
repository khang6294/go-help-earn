import * as actionTypes from './actionTypes'
import firebase from '../../firebaseConfig'

// export const register = (registerInfo) => {
//     return dispatch => {
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)
//             .then(createdUser => {
//                 createdUser.user.updateProfile({
//                     displayName: registerInfo.name,
//                     photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
//                 })
//                     .then(() => {
//                         firebase.database().ref("users").child(createdUser.user.uid).set({
//                             name: createdUser.user.displayName,
//                             avatar: createdUser.user.photoURL
//                         })
//                             .then(() => {
//                                 dispatch({type:actionTypes.REGISTER_SUCCESS,payload: createdUser})
//                             })
//                     })
//                     .catch(err => {
//                         dispatch({type: actionTypes.REGISTER_FAIL,payload:err})
//                     });
                
//             })
//             .catch(err => {
//                 dispatch({type: actionTypes.REGISTER_FAIL,payload:err})
//             });
//     }
// }

export const login = (loginInfo) => {
    return dispatch => {
        firebase
            .auth()
            .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
            .then(signedInUser => {
                console.log(signedInUser)
                dispatch({type:actionTypes.LOGIN_SUCCESS,payload: signedInUser})
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

export const logout = () => {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => dispatch({type:actionTypes.LOGOUT, payload:''}));
    }
}


