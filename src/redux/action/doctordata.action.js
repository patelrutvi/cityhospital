import * as ActionTypes from '../ActionType'

export const getdoctordata = () => (dispatch) => {
    fetch(" http://localhost:3004/doctors")
    .then(response => response.json())
    .then((data) => dispatch({type:ActionTypes.GET_DOCTORDATA , payload:data}))
    .catch(error=>console.log(error))
}