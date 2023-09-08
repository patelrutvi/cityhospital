import { combineReducers } from "redux"
// import { counterReduce } from "./counter.reduce"
import { doctordataReduce } from "./doctordata.reduce"
import { medicineReducer } from "./medicine.reducer"
import { addtoCartreducer } from "./addtocart.reducer"
import { myfavreducer } from "./myfav.reducer"
import alertReducer from "../slice/alertslice"
import { authReducer } from "./auth.reducer"
import appoimentReducer from "../slice/appoimentslice"
import departmentReducer from "../slice/departmentslice"
import fdepartmentReducer from '../slice/departmentFireSlice';
import doctorFireReducer from "../slice/doctorFireslice"



export const rootReducer = combineReducers({
    doctor: doctordataReduce,
    fdoctor:doctorFireReducer,
    medicine: medicineReducer,
    cart: addtoCartreducer,
    fav: myfavreducer,
    department:departmentReducer,
    fdapart:fdepartmentReducer,
    alert:alertReducer,
    auth:authReducer,
    appoiment:appoimentReducer
    
})


