import { createSlice } from "@reduxjs/toolkit";

const initstate = {
    count : 0
}

export const counterfacslice = createSlice ({
    name:'counter',
    initialState:initstate,
    reducers:{
        incrementfac:(state,action) => {
            state.count += 1
        }, 
        decrementfac:(state,action) => {
            state.count -= 1
        }
    }
})

export const {incrementfac,decrementfac} = counterfacslice.actions;
export default counterfacslice.reducer;