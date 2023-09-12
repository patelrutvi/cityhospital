
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDepartmentdata, deleteDepartmentdata, getDepartmentdata, updateDepartmentdata } from "../../common/apis/department.api"
//redux toolkit
const initState = {
    isloading: false,
    depart: [],
    error: null,
}

export const fetchDepartments = createAsyncThunk(
    'department/fetch',

    async () => {
        console.log("get dep data");
        await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        let response = await getDepartmentdata()
        return response.data;
        // console.log( response.data);

        
    }

)

export const addDepartments = createAsyncThunk(
    'department/add',
    
    async (data) => {
        let response = await addDepartmentdata(data)
        return response.data
    }
)

export const deleteDepartments = createAsyncThunk(
    'department/delete',
    async (id) => {
       await deleteDepartmentdata(id)
        return id
    }
)

export const updatedepartments = createAsyncThunk(
    'department/update',
    async (data) => {
        let response = await updateDepartmentdata(data)
        return response.data
    }
)

export const isloadingData = createAsyncThunk(
    'department/loading'
)

const onRejected = (state, action) => {
    state.isloading = false;
    state.error = action.error.message
}

const onLoading = (state, action) => {
    state.isloading = true;
    state.error = null ;
}
export const departmentslice = createSlice({
    name: 'department',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartments.pending,onLoading)
            .addCase(fetchDepartments.fulfilled, (state, action) => {
                console.log(action.payload,"actioooooon");
                state.depart = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(fetchDepartments.rejected , onRejected)

            .addCase(addDepartments.pending,onLoading)
            .addCase(addDepartments.fulfilled, (state, action) => {
                state.depart = state.depart.concat(action.payload)
                state.isloading = false
                state.error = null
            })
            .addCase(addDepartments.rejected,onRejected)

            .addCase(deleteDepartments.fulfilled, (state, action) => {
                state.depart = state.depart.filter((v) => v.id !== action.payload)
                state.isloading = false
                state.error = null 
            })
            .addCase(updatedepartments.fulfilled, (state, action) => {
                let udata = state.depart.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })                                                                                                                                      
                state.depart = udata
                state.isloading = false
                state.error = null
            })
    }
})

export default departmentslice.reducer