import * as actionTypes from './actionTypes'

export const createWork = (work) => {
    return {
        type: actionTypes.CREATE_WORK,
        payload: work
    }
}

export const updateWork = (work) => {
    return {
        type: actionTypes.UPDATE_WORK,
        payload: work
    }
}

export const deleteWork = (work) => {
    return {
        type: actionTypes.DELETE_WORK,
        payload: work
    }
}