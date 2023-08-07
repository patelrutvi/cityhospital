
import { act } from 'react-dom/test-utils';
import * as ActionType from '../ActionType'

const initalState = {
    drData: [],
    loding: false,
    error: null

};

export const doctordataReduce = (state = initalState, action) => {
    // console.log(action, "njkh");

    switch (action.type) {
        case ActionType.LODING_DATA :
            return{
                drData: [],
                loding: true,
                error: null
            }
            case ActionType.ERROR_HANDLE :
                return {
                    drData: [],
                    loding: false,
                    error: action.paylord
                }
        case ActionType.GET_DOCTORDATA:
            return {
                ...state,
                drData: action.paylord,
                loding: false,
            }

        case ActionType.ADD_DOCTORDATA:
            return {
                ...state,
                drData: state.drData.concat(action.paylord)
            }
        case ActionType.DELETE_DOCTORDATA:
            return {
                ...state,
                drData: state.drData.filter((v) => v.id != action.paylord)

            }
        case ActionType.EDIT_DOCTORDATA:
            return {
                ...state,
                drData: state.drData.map((v,i) => {
                    if(v.id === action.paylord.id){
                        return action.paylord
                    }else{
                        return v
                    }
                })
            }
        default:
            return state
    }



}
console.log(initalState.drData, 'dsdata');