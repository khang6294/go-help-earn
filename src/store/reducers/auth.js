import * as actionTypes from '../actions/actionTypes'


const initialState = {
    currentUser: {},
    error:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.LOGIN_FAIL:
        return {
            ...state,
            error: action.payload
        }
        case actionTypes.REGISTER_FAIL:
        return {
            ...state,
            error: action.payload
        }
        case actionTypes.RESET_ERR:
        return {
            ...state,
            error: null
        }
        default:
        return state
    }
}

export default authReducer