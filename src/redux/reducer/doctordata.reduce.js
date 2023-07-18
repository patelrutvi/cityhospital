
import * as ActionType from '../ActionType'


export const doctordataReduce = (state = {
    isFetching: false,
    items: []
}, action) => {
    console.log(action);

    switch (action.type) {
        case ActionType.GET_DOCTORDATA:
            return {
                ...state,
                isFetching: true,
            };
        case ActionType.GET_DOCTORDATA:
            return {
                ...state,
                isFetching: false,
                items: action.files,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }

}

export const filesUploaded = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.GET_DOCTORDATA:
        case ActionType.GET_DOCTORDATA:
            return {
                ...state,
                items: files(state[action], action)
            };
        default:
            return state
    }
};