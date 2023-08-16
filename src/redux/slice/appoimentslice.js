import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import {  getDocs } from "firebase/firestore";

const initState = {
    isLoading: false,
    apt: [],
    error: null
}

export const appoinmentfetch = createAsyncThunk(
    'appointment/fetch',
    async (data) => {
        console.log(data, "appoiment slice");
        try {
            const docRef = await addDoc(collection(db, "appoinment"), data);
            console.log("Document written with ID: ", docRef.id);
            return {
                id: docRef.id,
                ...data
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)
export const getappoinment = createAsyncThunk(
    'appointment/fetch',
    async (id) => {
        try {
            const querySnapshot = await getDocs(collection(db, "appoinment"),id);
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} `,"listttt");
                return {
                    id:doc.id,
                    
                }
            });
          
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

)
const onRejected = (state, action) => {
    state.isloading = false;
    state.error = action.error.message
}

const onLoading = (state, action) => {
    state.isloading = true;
    state.error = null;
}

export const appoinmentslice = createSlice({
    name: 'appoinment',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(appoinmentfetch.pending, onLoading)
            .addCase(appoinmentfetch.fulfilled, (state, action) => {
                console.log(action.payload,"action");
                state.apt = action.payload
            })
    }

})

export default appoinmentslice.reducer