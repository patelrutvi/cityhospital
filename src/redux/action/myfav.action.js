import * as ActionType from '../ActionType'

export const addFavIcon = (id) => (dispatch) => {
    console.log(id,"id");
    dispatch({type:ActionType.CART_ICON_FAV , payload : {pid:id , qyt : 1}})
}

export const deleteFavData = (id) => (dispatch) => {
    console.log(id,"delete id");
    dispatch({type:ActionType.CART_DELETE_DATA , payload :id})
}