import * as ActionType from '../ActionType'

const initstate = {
    user: null,
    isloading: false,
    error: null
}

export const authReducer = (state = initstate, action) => {
    console.log(action);

    switch (action.type) {
        case ActionType.SIGN_UPREQUEST:
        case ActionType.LOGIN_REQUEST:
            return {
                user: null,
                isloading: true,
                error: null
            }
        case ActionType.EMAIL_VALIFICATION:
            return {
                user: null,
                isloading: false,
                error: null
            }
        case ActionType.AUTH_ERROR:
            return {
                user: null,
                isloading: false,
                error: action.payload
            }
        case ActionType.LOGGED_IN:
            return {
                user: action.payload,
                isloading: false,
                error: null
            }
        case ActionType.LOG_OUT:
            return {
                user: null,
                isloading: false,
                error: null
            }
        default:
            return state
    }

}