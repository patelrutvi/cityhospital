import * as ActionType from '../ActionType'

export const addtoCart = (id) => (dispatch) => {
    dispatch({type:ActionType.ADD_TO_CART , payload : {pid:id , qyt : 1}})
}


export const incQty = (id) => (dispatch) => {
    dispatch({type: ActionType.INC_QTY , payload : id})
}