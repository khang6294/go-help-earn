import * as actionTypes from '../actions/actionTypes'


const initialState = {
    currentUser: {},
    error:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.LOGIN_SUCCESS:
        return {
            authenticated: true,
            error:null,
            currentUser: action.payload
        }
        case actionTypes.LOGIN_FAIL:
        console.log(action.payload)
        return {
            ...state,
            error: action.payload
        }
        case actionTypes.RESET_ERR:
        return {
            ...state,
            error: null
        }
        case actionTypes.LOGOUT:
        return {
            ...state,
            authenticated: false,
            currentUser: {}
        }
        default:
        return state
    }
}

export default authReducer