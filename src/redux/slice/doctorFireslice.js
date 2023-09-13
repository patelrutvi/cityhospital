import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const initstate = {
    drFire: [],
    isloading: false,
    error: null
}

export const addDoctorFire = createAsyncThunk(
    'doctors/add',
    async (data) => {
        console.log(data, "doctor fire add data");
        try {
            const storage = getStorage();
            let rNo = Math.floor(Math.random() * 100000)
            const storageRef = ref(storage, 'drprescriptiondepart/' + rNo + "_" + data.pres.name);
            let idata = { ...data }
            await uploadBytes(storageRef, data.pres).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, pres: url, "pres_name": rNo + "_" + data.pres.name }
                        const docRef = await addDoc(collection(db, "doctor"), idata);
                        idata = {
                            id: docRef.id,
                            ...data,
                            pres: url,
                            "pres_name": rNo + "_" + data.pres.name
                        }
                        console.log(idata, "i datataaaaa");
                    });
            });
            return idata

        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // const docRef = await addDoc(collection(db, "doctor"), data);
        // console.log("Document written with ID: ", docRef.id);
        // return {
        //     id: docRef.id,
        //     ...data
        // }
    }
)

export const getDoctorFire = createAsyncThunk(
    'doctors/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "doctor"));
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
                console.log(data, "data");

            });
            return data
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
)

export const deleteDoctorsFire = createAsyncThunk(
    'doctors/delete',
    async (data) => {
      
        try {
            const aptRef = ref(storage, 'drprescriptiondepart/' + data.pres_name);
            deleteObject(aptRef).then(async () => {
                // File deleted successfully
                await deleteDoc(doc(db, "doctor", data.id));
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return data.id
    }
)


export const updateDoctorFire = createAsyncThunk(
    'doctors/update',
    async (data) => {
        console.log(data, "doctor  slice up-data");
        try {
            if (typeof data.pres === "string") {
                console.log("image no change");
                const aptRef = doc(db, "doctor", data.id);
                await updateDoc(aptRef, data);
                return data
            } else {
                let idata = { ...data }
                console.log("image  change");
                const aptRef = ref(storage, 'drprescriptiondepart/' + data.pres_name);
                await deleteObject(aptRef).then(async () => {
                    // File deleted successfull
                    console.log("update img");
                    let rNo = Math.floor(Math.random() * 100000)
                    const storageRef = ref(storage, 'drprescriptiondepart/' + rNo + "_" + data.pres.name);

                    await uploadBytes(storageRef, data.pres).then(async (snapshot) => {
                        console.log('Uploaded new img a blob or file!');
                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log(url);
                                idata = { ...data, pres: url, "pres_name": rNo + "_" + data.pres.name }
                                const aptRef = doc(db, "doctor", data.id);
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
export const doctorFireslice = createSlice({
    name: 'doctors',
    initialState: initstate,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addDoctorFire.rejected, onRejected)
            .addCase(addDoctorFire.pending, onLoading)
            .addCase(addDoctorFire.fulfilled, (state, action) => {
                console.log(action.payload, "doctor fire action");
                state.drFire = state.drFire.concat(action.payload)
                state.isloading = false;
                state.error = null;
            })

            .addCase(getDoctorFire.rejected, onRejected)
            .addCase(getDoctorFire.pending, onLoading)
            .addCase(getDoctorFire.fulfilled, (state, action) => {
                console.log(action.payload, " getDoctorFire action");
                state.drFire = action.payload
                state.isloading = false;
                state.error = null;

            })


            .addCase(deleteDoctorsFire.rejected, onRejected)
            .addCase(deleteDoctorsFire.pending, onLoading)
            .addCase(deleteDoctorsFire.fulfilled, (state, action) => {
                console.log(action.payload, "action delete");
                state.drFire = state.drFire.filter((v) => v.id !== action.payload)
                state.isloading = false;
                state.error = null;
            })



            .addCase(updateDoctorFire.rejected, onRejected)
            .addCase(updateDoctorFire.pending, onLoading)
            .addCase(updateDoctorFire.fulfilled, (state, action) => {
                console.log(action.payload.id, "action fire doctor update");
                let udata = state.drFire.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })

                state.drFire = udata
                state.isloading = false;
                state.error = null;
            })
    }
})

export default doctorFireslice.reducer