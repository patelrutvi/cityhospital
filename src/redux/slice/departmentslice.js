import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDepartmentdata } from "../../common/apis/department.api"
import { Action } from "@remix-run/router"

const initstate = {
    isloading : false,
    depData : [] ,
    error:null
}


export const fetchDepartment = createAsyncThunk (
    'department/fetch',
    async () => {
        await new Promise ((resolve , reject) => setTimeout(resolve,1000))
        let response = await getDepartmentdata()
        return response.data
    }
)

export const departmentslice = createSlice ({
    name:'depData',
    initialState:initstate,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartment.fulfilled,(state,action) => {
                console.log(action);
                state.depData = action.payload
            })
    }
})



// export const deleteDepartments = createAsyncThunk(
//     'department/delete',
//     async (id) => {
//        await deleteDepartmentData(id)
//         return id
//     }
// )

// export const updatedepartments = createAsyncThunk(
//     'department/update',
//     async (data) => {
//         let response = await updateDepartmentData(data)
//         return response.data
//     }
// )

// export const isloadingData = createAsyncThunk(
//     'department/loading'
// )

// const onRejected = (state, action) => {
//     state.isloading = false;
//     state.error = action.error.message
// }

// const onLoading = (state, action) => {
//     state.isloading = true;
//     state.error = null ;
// }
// export const departmentSlice = createSlice({
//     name: 'department',
//     initialState: initState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchDepartments.pending,onLoading)
//             .addCase(fetchDepartments.fulfilled, (state, action) => {
//                 console.log(action);
//                 state.depart = action.payload
//                 state.isloading = false
//                 state.error = null
//             })
//             .addCase(fetchDepartments.rejected , onRejected)

//             .addCase(addDepartments.pending,onLoading)
//             .addCase(addDepartments.fulfilled, (state, action) => {
//                 state.depart = state.depart.concat(action.payload)
//                 state.isloading = false
//                 state.error = null
//             })
//             .addCase(addDepartments.rejected,onRejected)

//             .addCase(deleteDepartments.fulfilled, (state, action) => {
//                 state.depart = state.depart.filter((v) => v.id !== action.payload)
//                 state.isloading = false
//                 state.error = null 
//             })
//             .addCase(updatedepartments.fulfilled, (state, action) => {
//                 let udata = state.depart.map((v) => {
//                     if (v.id === action.payload.id) {
//                         return action.payload
//                     } else {
//                         return v
//                     }
//                 })
//                 state.depart = udata
//                 state.isloading = false
//                 state.error = null
//             })
//     }
// })

// export default departmentSlice.reducer