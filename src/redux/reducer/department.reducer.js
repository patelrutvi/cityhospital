import * as  ActionType from '../ActionType'

const init = {
    depart: [],
    error: null,
    loading: false
}

export const departmentReducer = (state = init, action) => {
    console.log(state, action);
    switch (action.type) {
        case ActionType.GET_DEPARTMENTDATA:
            return {
                ...state,
                depart: action.payload,
                loading: false,
            }
        case ActionType.ADD_DEPARTMENT:
            return {
                ...state,
                depart: state.depart.concat(action.payload)
            }
        case ActionType.DELETE_DEPARTMENT:
            return {
                ...state,
                depart: state.depart.filter((v) => v.id != action.payload)
            }
        case ActionType.UPDATE_DEPARTMENT:
            return {
                ...state,
                depart : state.depart.map((v) => {
                    if(v.id === action.payload.id){
                        return action.payload
                    }  else {
                        return v
                    }
                })
            }
        default:
            return state
    }
}