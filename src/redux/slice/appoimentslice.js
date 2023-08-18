import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initState = {
    isloading: false,
    apt: [],
    error: null
}
export const getappoinment = createAsyncThunk(
    'appointment/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "appoinment"));
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
                console.log(data);

            });
            return data
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    }

)
export const addappoinment = createAsyncThunk(
    'appointment/add',
    async (data) => {
        console.log(data, "appoiment slice");

        try {
            const storageRef = ref(storage, 'prescription/' + data.pres.name);
            let idata = { ...data }
            await uploadBytes(storageRef, data.pres).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, pres: url }
                        const docRef = await addDoc(collection(db, "appoinment"), idata);
                        idata = {
                            id: docRef.id,
                            ...data,
                            pres: url
                        }
                    });
            });
            return idata
            // console.log(idata);

            // const docRef = await addDoc(collection(db, "appoinment"), data);
            // console.log("Document written with ID: ", docRef.id);
            // return {
            //     id: docRef.id,
            //     ...data
            // }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const deleteappoinment = createAsyncThunk(
    'appointment/delete',
    async (id) => {
        console.log(id, "appoiment slice id");
        try {
            await deleteDoc(doc(db, "appoinment", id));
            return id
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)
export const updateappoinment = createAsyncThunk(
    'appointment/update',
    async (data) => {
        console.log(data, "appoiment slice up-data");
        try {
            const aptRef = doc(db, "appoinment", data.id);
            await updateDoc(aptRef, data);
            return data
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
            .addCase(getappoinment.rejected, onRejected)
            .addCase(getappoinment.pending, onLoading)
            .addCase(getappoinment.fulfilled, (state, action) => {
                // console.log(action.payload, "action");
                state.apt = action.payload
                state.isloading = false;
                state.error = null;

            })
            .addCase(addappoinment.rejected, onRejected)
            .addCase(addappoinment.pending, onLoading)
            .addCase(addappoinment.fulfilled, (state, action) => {
                // console.log(action.payload,"action");
                state.apt = state.apt.concat(action.payload)
                state.isloading = false;
                state.error = null;
            })

            .addCase(deleteappoinment.rejected, onRejected)
            .addCase(deleteappoinment.pending, onLoading)
            .addCase(deleteappoinment.fulfilled, (state, action) => {
                console.log(action.payload, "action delete");
                state.apt = state.apt.filter((v) => v.id !== action.payload)
                state.isloading = false;
                state.error = null;
            })

            .addCase(updateappoinment.rejected, onRejected)
            .addCase(updateappoinment.pending, onLoading)
            .addCase(updateappoinment.fulfilled, (state, action) => {
                console.log(action.payload, "action update");
                let udata = state.apt.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })

                state.apt = udata
                state.isloading = false;
                state.error = null;
            })
    }

})

export default appoinmentslice.reducer