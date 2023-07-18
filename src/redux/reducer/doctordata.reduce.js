
import * as ActionType from '../ActionType'

const initalState = {
    drData: [{}],
  
  };

export const doctordataReduce = (state = initalState,action) => {
    console.log(action.paylord,"njkh");

    switch(action.type){
        case ActionType.GET_DOCTORDATA :
            return{
                ...state,
                drData:action.paylord
            }
            default :
            return state
           
    }
    
    
    
}
console.log(initalState.drdata,'dsdata');