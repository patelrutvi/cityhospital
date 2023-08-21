import { TOGGELE_THEME } from "../ActionType";

export const themeReducer = (state , action) => {
  console.log(state , action);
    switch (action.type){
        case TOGGELE_THEME :
         return {
          theme : action.payload
         }
          
        default :
            return  state
    }
}