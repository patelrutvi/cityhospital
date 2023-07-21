import * as ActionType from '../ActionType'

export const getdoctordata = () => (dispatch) => {

    try {
        dispatch(lodingData(true));
        setTimeout(() => {
            fetch("http://localhost:3004/doctor")
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Somthing went wrong')
                })
                .then((data) => dispatch({ type: ActionType.GET_DOCTORDATA, paylord: data }))
                .catch((error) => dispatch(errorHandle(error)))
        }, 3000);
    } catch (error) {
        console.log(error);
    }

}


export const addDoctor = (data) => (dispatch) => {
    console.log(data);
    try {
        fetch("http://localhost:3004/doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.ADD_DOCTORDATA, paylord: data }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const deleteDoctor = (id) => (dispatch) => {
    console.log(id);
    try {
        fetch("http://localhost:3004/doctors/" + id, {
            method: "DELETE",
        })
            .then(dispatch({ type: ActionType.DELETE_DOCTORDATA, paylord: id }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const updateDoctor = (data) => (dispatch) => {
    console.log(data);
    try {
        fetch("http://localhost:3004/doctors" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(dispatch({ type: ActionType.EDIT_DOCTORDATA, paylord: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const lodingData = (status) => (dispatch) => {
    dispatch({ type: ActionType.LODING_DATA, paylord: status })
}

export const errorHandle = (error) => (dispatch) => {
    console.log(error);
    dispatch({ type: ActionType.ERROR_HANDLE, paylord: error })
}

