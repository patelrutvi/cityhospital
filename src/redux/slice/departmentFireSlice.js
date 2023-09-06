import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";


const initstate = {
    FdepartData: [],
    isloading: false,
    error: null
}

export const addDepartmentFire = createAsyncThunk(
    'department/add' ,
    async (data) => {
        console.log(data, "department  fire add  slice");
        try {
            let rNo = Math.floor(Math.random() * 100000)
            const storageRef = ref(storage, 'prescriptiondepart/' + rNo + "_" + data.pres.name);
            let idata = { ...data }
            await uploadBytes(storageRef, data.pres).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, pres: url, "pres_name": rNo + "_" + data.pres.name }
                        const docRef = await addDoc(collection(db, "department"), idata);
                        idata = {
                            id: docRef.id,
                            ...data,    
                            pres: url,
                            "pres_name": rNo + "_" + data.pres.name
                        }
                    });
            });
            return idata
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)


export const getdepartmentFire = createAsyncThunk(
    'department/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "department"));
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
export const deletedepartmentFire = createAsyncThunk(
    'department/delete',
    async (data) => {
        console.log(data.id, "department fire slice id");
        try {
            const aptRef = ref(storage, 'prescriptiondepart/' + data.pres_name);
            deleteObject(aptRef).then(async () => {
                // File deleted successfully
                await deleteDoc(doc(db, "department", data.id));
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return data.id
    }
)
export const updatedepartmentFire = createAsyncThunk(
    'department/update',
    async (data) => {
        console.log(data, "department  slice up-data");
        try {
            if (typeof data.pres === "string") {
                console.log("image no change");
                const aptRef = doc(db, "department", data.id);
                await updateDoc(aptRef, data);
                return data
            } else {
                let idata = { ...data }
                console.log("image  change");
                const aptRef = ref(storage, 'prescriptiondepart/' + data.pres_name);
                await deleteObject(aptRef).then(async () => {
                    // File deleted successfull
                    console.log("update img");
                    let rNo = Math.floor(Math.random() * 100000)
                    const storageRef = ref(storage, 'prescriptiondepart/' + rNo + "_" + data.pres.name);

                    await uploadBytes(storageRef, data.pres).then(async (snapshot) => {
                        console.log('Uploaded new img a blob or file!');
                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log(url);
                                idata = { ...data, pres: url, "pres_name": rNo + "_" + data.pres.name }
                                const aptRef = doc(db, "department", data.id);
                                await updateDoc(aptRef, idata);
                                idata = {
                                    ...data,
                                    pres: url,
                                    "pres_name": rNo + "_" + data.pres.name
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
export const fdepartmentslice = createSlice({
    name: 'department',
    initialState: initstate,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addDepartmentFire.rejected, onRejected)
        .addCase(addDepartmentFire.pending, onLoading)
        .addCase(addDepartmentFire.fulfilled, (state, action) => {
            console.log(action.payload,"action fire depart");
            state.FdepartData = state.FdepartData.concat(action.payload)
            state.isloading = false;
            state.error = null;
        })

        .addCase(getdepartmentFire.rejected, onRejected)
        .addCase(getdepartmentFire.pending, onLoading)
        .addCase(getdepartmentFire.fulfilled, (state, action) => {
            console.log(action.payload, "get fire action");
            state.FdepartData = action.payload
            state.isloading = false;
            state.error = null;

        })

        
        .addCase(deletedepartmentFire.rejected, onRejected)
        .addCase(deletedepartmentFire.pending, onLoading)
        .addCase(deletedepartmentFire.fulfilled, (state, action) => {
            console.log(action.payload, "action delete fire delete");
            state.FdepartData = state.FdepartData.filter((v) => v.id !== action.payload)
            state.isloading = false;
            state.error = null;
        })

        .addCase(updatedepartmentFire.rejected, onRejected)
        .addCase(updatedepartmentFire.pending, onLoading)
        .addCase(updatedepartmentFire.fulfilled, (state, action) => {
            console.log(action.payload, "action fire depart ment update");
            let udata = state.FdepartData.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload
                } else {
                    return v
                }
            })

            state.FdepartData = udata
            state.isloading = false;
            state.error = null;
        })
    }
})

export default fdepartmentslice.reducer