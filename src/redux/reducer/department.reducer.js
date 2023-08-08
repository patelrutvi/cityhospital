import * as  ActionType from '../ActionType'

const initState = {
    depData : [],
    loading:false,
    error:null
}

export const departmentReducer = (state = initState , action) => {
    console.log(action);

    switch(action.type){
        case ActionType.GET_DEPARTMENTDATA : 
        return {
            ...state,
            depData : action.payload
        }
        case ActionType.ADD_DEPARTMENT : 
        return {
            ...state,
            depData:state.depData.concat(action.data)
        }
        case ActionType.DELETE_DEPARTMENT : 
        return {
            ...state,
            depData:state.depData.filter((v) => v.id != action.payload)
        }
        case ActionType.UPDATE_DEPARTMENT : 
        return {
            ...state,
            depData:state.depData.map((v) => {
                if(v.id === action.payload.id){
                    return action.payload
                }else{
                    return v
                }
            })
        }
        default : 
        return state
    }
}

