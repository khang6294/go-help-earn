import * as actionTypes from './actionTypes'
import {resetErr} from './auth'
export const openModal = (modalType,modalProps) => {
    return{
        type: actionTypes.OPEN_MODAL,
        payload:{
            modalType: modalType,
            modalProps: modalProps
        }
    }
}

export const closeModal = (modalType,modalProps) => {
    return (dispatch) => {
        dispatch(resetErr())
        dispatch({
            type: actionTypes.CLOSE_MODAL,
            payload:{
                modalType: modalType,
                modalProps: modalProps
            }
        })
    }        
}