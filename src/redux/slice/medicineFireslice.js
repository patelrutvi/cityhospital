import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

const initstate = {
    fMdata: [],
    isloading: false,
    error: null

}

export const addmedicinefire = createAsyncThunk(
    'medicines/add',
    async (data) => {
        console.log(data);
        try {
            let rNo = Math.floor(Math.random() * 100000)
            const storageRef = ref(storage, 'medicine/' + rNo + "_" + data.presM.name);
            let idata = { ...data }
            await uploadBytes(storageRef, data.presM).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, presM: url, presM_data: rNo + "_" + data.presM.name }
                        const docRef = await addDoc(collection(db, "medicine"), idata);
                        idata = {
                            id: docRef.id,
                            ...data,
                            pres: url,
                            presM_data: rNo + "_" + data.presM.name
                        }
                    });
            });
            return idata
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const getmedicineFire = createAsyncThunk(
    'medicines/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "medicine"));
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
export const deletemedicineFire = createAsyncThunk(
    'medicines/delete',
    async (data) => {
        console.log(data.id, "medicine slice id");
        try {
            const aptRef = ref(storage, 'medicine/' + data.presM_data);
            deleteObject(aptRef).then(async () => {
                // File deleted successfully
                await deleteDoc(doc(db, "medicine", data.id));
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return data.id
    }
)

export const updatemedicineFire = createAsyncThunk(
    'medicines/update',
    async (data) => {
        console.log(data, "doctor  slice up-data");
        try {
            if (typeof data.presM === "string") {
                console.log("image no change");
                const aptRef = doc(db, "medicine", data.id);
                await updateDoc(aptRef, data);
                return data
            } else {
                let idata = { ...data }
                console.log("image  change");
                const aptRef = ref(storage, 'medicine/' + data.presM_data);
                await deleteObject(aptRef).then(async () => {
                    // File deleted successfull
                    console.log("update img");
                    let rNo = Math.floor(Math.random() * 100000)
                    const storageRef = ref(storage, 'medicine/' + rNo + "_" + data.presM.name);

                    await uploadBytes(storageRef, data.presM).then(async (snapshot) => {
                        console.log('Uploaded new img a blob or file!');
                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log(url);
                                idata = { ...data, presM: url, "presM_data": rNo + "_" + data.presM.name }
                                const aptRef = doc(db, "medicine", data.id);
                                await updateDoc(aptRef, idata);
                                idata = {
                                    ...data,
                                    presM: url,
                                    "presM_data": rNo + "_" + data.presM.name
                                }
                            });
                    });
                })
                return idata



            }
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


export const medicineFireslice = createSlice({
    name: 'medicine',
    initialState: initstate,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addmedicinefire.rejected, onRejected)
            .addCase(addmedicinefire.pending, onLoading)
            .addCase(addmedicinefire.fulfilled, (state, action) => {
                // console.log(action.payload,"action");
                state.fMdata = state.fMdata.concat(action.payload)
                state.isloading = false;
                state.error = null;
            })

            .addCase(getmedicineFire.rejected, onRejected)
            .addCase(getmedicineFire.pending, onLoading)
            .addCase(getmedicineFire.fulfilled, (state, action) => {
                console.log(action.payload, "medicine fire get data");
                state.fMdata = action.payload
                state.isloading = false;
                state.error = null;

            })

            .addCase(deletemedicineFire.rejected, onRejected)
            .addCase(deletemedicineFire.pending, onLoading)
            .addCase(deletemedicineFire.fulfilled, (state, action) => {
                console.log(action.payload, "medicine fire delete data");
                state.fMdata = state.fMdata.filter((v) => v.id !== action.payload)
                state.isloading = false;
                state.error = null;
            })

            .addCase(updatemedicineFire.rejected, onRejected)
            .addCase(updatemedicineFire.pending, onLoading)
            .addCase(updatemedicineFire.fulfilled, (state, action) => {
                console.log(action.payload, "action update");
                let udata = state.fMdata.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })

                state.fMdata = udata
                state.isloading = false;
                state.error = null;
            })

    }
})

export default medicineFireslice.reducer