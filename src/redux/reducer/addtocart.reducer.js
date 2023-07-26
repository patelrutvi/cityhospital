import * as ActionType from '../ActionType'

const initState = {
    items: [],
    loding: false,
    error: null

}

export const addtoCartreducer = (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case ActionType.ADD_TO_CART:
            let item = state.items.some((v) => v.pid === action.payload.pid)
            if (item) {
                let index = state.items.findIndex((v) => v.pid === action.payload.pid)
                state.items[index].qyt++
                console.log(index);
            } else {
                state.items.push(action.payload)
            }
            console.log(state);


            return {
                items: state.items,
                loding: false,
                error: null
            }
        case ActionType.INC_QTY:
            console.log(state.items, action.payload);
            let index = state.items.findIndex((v) => v.pid === action.payload)
            console.log(index);
            state.items[index].qyt++

            return {
                items: state.items,
                loding: false,
                error: null
            }
        default:
            return state
    }
}