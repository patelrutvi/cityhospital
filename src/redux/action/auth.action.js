import * as ActionType from '../ActionType'

export const signupRequest = (data) => (dispatch) => {
    dispatch({type:ActionType.SIGN_UPREQUEST , payload:data})

}

export const loginRequest = (data) => (dispatch) => {
    dispatch({type:ActionType.LOGIN_REQUEST , payload:data})

}

export const forgotRequest = (data) => (dispatch) => {
    dispatch({type:ActionType.FORGOT_REQUEST , payload:data})

}