import * as actionTypes from '../actions/actionTypes'

const initialState ={
    works: []
}
const workReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_WORK:
        return {
            works: action.payload.works
        }
        default:
        return state
    }
}

export default workReducer