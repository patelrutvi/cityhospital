import * as ActionType from '../ActionType'
import { setAlert } from '../slice/alertslice';

export const getmedicinedata = () => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.GET_MEDICINEDATA, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const addmedicineData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAlert({ text: 'Add Data', color: 'success' }))
                dispatch({ type: ActionType.ADD_MEDICINEDATA, payload: data })

            })
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }

}

export const deleteMedicinedta = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + id, {
            method: "DELETE",
        })
            .then(
                dispatch(setAlert({ text: 'Delete data', color: 'success' })),
                dispatch({ type: ActionType.DELETE_MEDICINEDATA, payload: id })
            )
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const upadeMedicine = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(
                dispatch(setAlert({ text: 'Update data', color: 'success' })),
                dispatch({ type: ActionType.UPDATE_MEDICINEDATA, payload: data })
            )
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}


// export const addFavIcon = (id) => (dispatch) => {
//     dispatch({type:ActionType.CART_ICON_FAV , payload: id})
// }