import { deleteRequest, getRequest, postRequest, updateRequest } from "../request"

export const getDoctordata = () => {
  return  getRequest('doctors')
}

export const addDoctordata = (data) => {
    return postRequest('doctors',data)
}

export const deleteDoctordata = (id) => {
    return deleteRequest('doctors/'+ id)
}

export const updateDoctordata = (data) => {
    return updateRequest('doctors/' + data.id,data)
}