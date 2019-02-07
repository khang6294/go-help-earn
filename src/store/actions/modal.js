import * as actionTypes from './actionTypes'

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
    return{
        type: actionTypes.CLOSE_MODAL,
        payload:{
            modalType: modalType,
            modalProps: modalProps
        }
    }
}