import { deleteRequest, getRequest, postRequest, updateRequest } from "../request"

export const getDepartmentdata = () => {
   return  getRequest('department')
}
export const addDepartmentData = (data) => {
   return postRequest('department' , data)
}

export const deleteDepartmentData = (id) => {
   return deleteRequest("department/" + id )
}

export const updateDepartmentData = (data) => {
   return updateRequest("department/" + data.id  , data)
}