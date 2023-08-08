import {  deleteRequest, getRequest, postRequest, updateRequest } from "../request"

export const getDepartmentdata = () => {
   return  getRequest('department')
}

export const addDepartmentdata =  (data) => {
   return postRequest('department',data)
}

export const deleteDepartmentdata = (id) => {
   return deleteRequest('department/' + id)
}

export const updateDepartmentdata = (data) => {
   return updateRequest('department/' + data.id , data)
}
