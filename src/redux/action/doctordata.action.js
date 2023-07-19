import * as ActionType from '../ActionType'

export const getdoctordata = () => (dispatch) => {
    try{
        fetch("http://localhost:3004/doctors")
        .then((response) => response.json())
        .then((data) => dispatch({type : ActionType.GET_DOCTORDATA , paylord : data}))
        .catch((error)=>console.log(error))
    }catch(error){
        console.log(error);
    }
   
}


export const addDoctor = (data) => (dispatch) => {
    try{
        fetch("http://localhost:3004/doctors")
    }catch(error){
        console.log(error);
    }
}