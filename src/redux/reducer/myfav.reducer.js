import * as ActionType from '../ActionType'

const initState = {
    myfav: [],
    loding: false,
    error: null

}
export const myfavreducer = (state = initState,action) => {
    console.log(action,"action");
    switch(action.type){
        case ActionType.CART_ICON_FAV : 
        let item = state.myfav.some((v) => v.pid === action.payload.pid)
        console.log(item,"item");
        if(item){
            let findex = state.myfav.findIndex((f) => f.pid === action.payload.pid)
            state.myfav[findex].qyt++
            console.log(findex);
        }else {
            state.myfav.push(action.payload)
        }
        console.log(state);
        return {
            myfav: state.myfav,
            loding: false,
            error: null
        }
        default : 
        return state
    }

}