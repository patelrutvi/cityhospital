import * as ActionType from '../ActionType'

const initState = {
    myfav: [],
    loding: false,
    error: null

}
export const myfavreducer = (state = initState, action) => {
    console.log(action, "action");
    switch (action.type) {
        case ActionType.CART_ICON_FAV:
            let item = state.myfav.some((v) => v.pid === action.payload.pid)
            console.log(item, "item");
            let dFav;
            if (item) {
                dFav = state.myfav.filter((v) => v.pid !== action.payload.pid)
                state.myfav = dFav
                console.log(dFav, "dFav");
            } else {
                state.myfav.push(action.payload)
            }
            console.log(item, state, dFav);
            return {
                myfav: state.myfav,
                error: null,
                loading: false
            }
        case ActionType.CART_DELETE_DATA:
            return {
                myfav: state.myfav.filter((f) => f.pid !== action.payload),
                error: null,
                loading: false
            }
        default:
            return state
    }

}