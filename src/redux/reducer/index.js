import { combineReducers } from "redux"
// import { counterReduce } from "./counter.reduce"
import { doctordataReduce } from "./doctordata.reduce"
import { medicineReducer } from "./medicine.reducer"
import { addtoCartreducer } from "./addtocart.reducer"
import { myfavreducer } from "./myfav.reducer"
// import counterReduce from "../../slice/counterslice"

import alertReducer from "../slice/alertslice"
import { authReducer } from "./auth.reducer"
import appoimentReducer from "../slice/appoimentslice"
import counterfacReducer from "../slice/counterfacslice"
import departmentReducer from "../slice/departmentslice"
import fdepartmentReducer from '../slice/departmentFireSlice';



export const rootReducer = combineReducers({
    // counter: counterReduce,
    // counter: counterReduce,
    doctor: doctordataReduce,
    medicine: medicineReducer,
    cart: addtoCartreducer,
    fav: myfavreducer,
    department:departmentReducer,
    fdapart:fdepartmentReducer,
    alert:alertReducer,
    auth:authReducer,
    appoiment:appoimentReducer,
    counterfact:counterfacReducer
   

    
})


