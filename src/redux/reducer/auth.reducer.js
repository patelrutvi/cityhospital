import * as ActionType from '../ActionType'

const initstate = {
    user: null,
    loading: false,
    error: null
}

export const authReducer = (state = initstate, action) => {
    console.log(action);

    switch (action.type) {
        case ActionType.SIGN_UPREQUEST:
            return {
                ...state
            }
        default:
            return state
    }

}