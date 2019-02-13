import * as actionTypes from './actionTypes'
import { toastr } from 'react-redux-toastr'

export const createWork = (work) => {
    return async dispatch => {
        try {
            dispatch({
                type: actionTypes.CREATE_WORK,
                payload: work
            });
            toastr.success('Success', 'New work created')
        } catch (error) {
            toastr.error('Oops', 'Something went wrong')
        }
    };
}

export const updateWork = (work) => {
    return async dispatch => {
        try {
            dispatch({
                type: actionTypes.UPDATE_WORK,
                payload: work
            });
            toastr.success('Success', 'Work has been updated')
        } catch (error) {
            toastr.error('Oops', 'Something went wrong')
        }
    };
}

export const deleteWork = (work) => {
    return {
        type: actionTypes.DELETE_WORK,
        payload: work
    }
}