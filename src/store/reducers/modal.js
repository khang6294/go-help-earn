import * as actionTypes from '../actions/actionTypes'

const initialState = null

const modalReducer = (state=initialState,action,error) =>{ 
    switch(action.type){
        case actionTypes.OPEN_MODAL:
        return{
            modalType: action.payload.modalType,
            modalProps: action.payload.modalProps,
        }
        case actionTypes.CLOSE_MODAL:
        return null
        default:
        return state
    }  
}

export default modalReducer