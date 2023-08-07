import { addDepartmentData, deleteDepartmentData, getDepartmentdata, updateDepartmentData } from '../../common/apis/department.api';
import * as ActionType from '../ActionType'

export const getdepartment = () => (dispatch) => {
    try{
        getDepartmentdata()
        .then((response) => dispatch({ type: ActionType.GET_DEPARTMENTDATA, paylord: response.data }))
        // .catch((error) => dispatch(errorHandle(error)))
    }catch (error) {
        console.log(error);
    }
}

export const addData = (data) => (dispatch) => {
    try{
        addDepartmentData(data)
        .then((response) => dispatch({type : ActionType.ADD_DEPARTMENT , payload : response.data}))
        .catch((error) => console.log(error))

    } catch (error){
        console.log(error);
    }
}

export const deleteData = (id) => (dispatch) => {
    try{
        deleteDepartmentData(id)
        .then(dispatch({type : ActionType.DELETE_DEPARTMENT , payload : id}))
        .catch((error) => console.log(error))

    } catch (error){
        console.log(error);
    }
}

export const updateData = (data) => (dispatch) => {
    try{
        updateDepartmentData(data)
        .then(dispatch({type : ActionType.UPDATE_DEPARTMENT , payload : data}))
        .catch((error) => console.log(error))

    } catch (error){
        console.log(error);
    }
}