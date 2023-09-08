import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initstate = {
    drFire: [],
    isloading: false,
    error: null
}

export const addDoctorFire = createAsyncThunk(
    'doctors/add',
    async (data) => {
        console.log(data,"doctor fire add data");
        try {
            let rNo = Math.floor(Math.random() * 100000)
            const storageRef = ref(storage, 'prescriptiondr/' + rNo + "_" + data.pres.name);
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

export const getDoctorFire = createAsyncThunk (
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
                console.log(data,"data");

            });
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

export const doctorFireslice = createSlice({
    name: 'doctors',
    initialState: initstate,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addDoctorFire.rejected,onRejected)
            .addCase(addDoctorFire.pending ,onLoading )
            .addCase(addDoctorFire.fulfilled, (state, action) => {
                console.log(action.payload,"doctor fire action");
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
    }
})

export default doctorFireslice.reducer