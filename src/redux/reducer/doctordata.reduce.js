
import * as ActionType from '../ActionType'

const iniState = {
    loading : true ,
    drdata : {},
    error : ''
}

export const doctordataReduce = (state = iniState,action) => {
    console.log(action.paylord,"njkh");

    switch(action.type){
        case ActionType.GET_DOCTORDATA :
            return{
                drdata : state.action.paylord
            }
            default :
            return state
           
    }
    
    
    
}
console.log(iniState.drdata,'dsdata');