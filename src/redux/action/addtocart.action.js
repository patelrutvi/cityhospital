import * as ActionType from '../ActionType'

export const addtoCart = (id) => (dispatch) => {
    dispatch({type:ActionType.ADD_TO_CART , payload : {pid:id , qyt : 1}})
}

export const incQty = (id) => (dispatch) => {
    dispatch({type: ActionType.INC_QTY , payload : id})
}
export const decrQty = (id) => (dispatch) => {
    dispatch({type: ActionType.DEC_QTY , payload : id})
}


export const deleteCArtdata = (id) => (dispatch) => {
    dispatch({type:ActionType.CART_DELETE_DATA , payload : id})
}