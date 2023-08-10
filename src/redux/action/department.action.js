import { addDepartmentdata, deleteDepartmentdata, getDepartmentdata, updateDepartmentdata } from '../../common/apis/department.api';
import * as ActionType from '../ActionType'
import { setAlert } from '../slice/alertslice';

export const getDepartmentdataa = () => (dispatch) => {
    try {
        getDepartmentdata()
            .then((response) => dispatch({ type: ActionType.GET_DEPARTMENTDATA, payload: response.data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }

}

export const addDepartdata = (data) => (dispatch) => {
    try {
        addDepartmentdata(data)
            .then((response) => {
                dispatch(setAlert({ text: 'Add Data', color: 'success' }))
                dispatch({ type: ActionType.ADD_DEPARTMENT, payload: response.data })
            }
            )
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}
export const deleteDepartdata = (id) => (dispatch) => {
    try {
        deleteDepartmentdata(id)
            .then(
                dispatch(setAlert({ text: 'Delete Data', color: 'success' })),
                dispatch({ type: ActionType.DELETE_DEPARTMENT, payload: id })
            )
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updatedepartdata = (data) => (dispatch) => {
    try {
        updateDepartmentdata(data)
            .then(
                dispatch(setAlert({ text: 'Upadate Data', color: 'success' })),
                dispatch({ type: ActionType.UPDATE_DEPARTMENT, payload: data })
            )
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

