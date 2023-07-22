import * as ActionType from '../ActionType'

const initState = {
    mediData: [],
    loding: false,
    error: null
}

export const medicineReducer = (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case ActionType.GET_MEDICINEDATA:
            return {
                ...state,
                mediData: action.payload
            }
        case ActionType.ADD_MEDICINEDATA:
            return {
                ...state,
                mediData:state.mediData.concat(action.payload)
            }
        case ActionType.DELETE_MEDICINEDATA : 
        return {
            ...state,
            mediData:state.mediData.filter((v) => v.id != action.payload)
        }
        default:
            return state
    }

}