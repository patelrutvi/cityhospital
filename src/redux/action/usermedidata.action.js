import * as ActionType from '../ActionType'

export const getmediData = () => (dispatch) => {
    try{
        fetch("http://localhost:3004/medicines")
        .then((response) => response.json())
        .then((data) => dispatch({type:ActionType.GET_USERMEDICINEDATA , payload : data}))
        .catch((error) => console.log(error))
    }catch(error){
        console.log(error);
    }
}