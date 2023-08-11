import * as ActionType from '../ActionType'

export const signupRequest = (data) => (dispatch) => {
    dispatch({type:ActionType.SIGN_UPREQUEST , payload:data})

}

export const emailVarification = () => (dispatch) => {
    dispatch({type:ActionType.EMAIL_VALIFICATION})
}

export const loginRequest = (data) => (dispatch) => {
    dispatch({type:ActionType.LOGIN_REQUEST , payload:data})

}
export const authLoggedin = (data) => (dispatch) => {
    dispatch({type:ActionType.LOGGED_IN , payload:data})

}

export const forgotRequest = (data) => (dispatch) => {
    dispatch({type:ActionType.FORGOT_REQUEST , payload:data})

}

export const authError = (data) => (dispatch) => {
    dispatch({type:ActionType.AUTH_ERROR , payload:data})

}


export const authLogout = (data) => (dispatch) => {
    dispatch({type:ActionType.LOG_OUT , payload:data})

}