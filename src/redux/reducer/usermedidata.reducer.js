import * as ActionType from '../ActionType'

const initstate = {
    usrMdata : [],
    loding:false,
    error:null,
}

export const userMediReduser = (state = initstate , action) => {
    console.log(action,"user medi action");

    switch(action.type){
        case ActionType.GET_USERMEDICINEDATA : 
        return{
            ...state,
            usrMdata : action.payload,
            loding:false,
            
        }
        default :
        return state
    }
}