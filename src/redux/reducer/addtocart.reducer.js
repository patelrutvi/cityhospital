import * as ActionType from '../ActionType'

const initState = {
    items: [],
    loding: false,
    error: null

}

export const addtoCartreducer = (state = initState, action) => {
    // console.log(action);

    switch (action.type) {
        case ActionType.ADD_TO_CART:
            let item = state.items.some((v) => v.pid === action.payload.pid)
            if (item) {
                let index = state.items.findIndex((v) => v.pid === action.payload.pid)
                state.items[index].qyt++
                // console.log(index);
            } else {
                state.items.push(action.payload)
            }
            // console.log(state);


            return {
                items: state.items,
                loding: false,
                error: null
            }
        case ActionType.INC_QTY:
            // console.log(state.items, action.payload);
            let indexinc = state.items.findIndex((v) => v.pid === action.payload)
            // console.log(indexinc);
            state.items[indexinc].qyt++

            return {
                items: state.items,
                loding: false,
                error: null
            }
        case ActionType.DEC_QTY:
            // console.log(state.items, action.payload)
            // console.log(state.items.qyt,"hfbdhf");
            let indexdec = state.items.findIndex((v) => v.pid === action.payload)
            console.log(indexdec);

            if (state.items[indexdec].qyt > 1) {
                // console.log("hhjbv");
                state.items[indexdec].qyt--
            }


            return {
                items: state.items,
                loding: false,
                error: null
            }

        case ActionType.CART_DELETE_DATA:
            // console.log(action.payload);
            return{
                items: state.items.filter((v) => v.pid !== action.payload),
                loding: false,
                error: null
            
            }
            // return {
            //     items: state.items,
            //     loding: false,
            //     error: null
            // }


        default:
            return state
    }
}