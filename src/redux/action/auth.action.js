import * as ActionType from '../ActionType'

export const signupRequest = (data) => (dispatch) => {
    dispatch({type:ActionType.SIGN_UPREQUEST , payload:data})

}