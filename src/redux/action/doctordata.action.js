import * as ActionType from '../ActionType'

export const getdoctordata = () => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctors")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.GET_DOCTORDATA, paylord: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }

}


export const addDoctor = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

