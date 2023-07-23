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
        case ActionType.UPDATE_MEDICINEDATA :
            return {
                ...state ,
                mediData : state.mediData.map((v) => {
                    if(v.id === action.payload.id){
                        return action.payload
                    }else{
                        return v
                    }
                })
            }
        default:
            return state
    }

}