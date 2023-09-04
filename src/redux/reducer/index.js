import { combineReducers } from "redux"
import { doctordataReduce } from "./doctordata.reduce"
import { medicineReducer } from "./medicine.reducer"
import { addtoCartreducer } from "./addtocart.reducer"
import { myfavreducer } from "./myfav.reducer"
import alertReducer from "../slice/alertslice"
import { authReducer } from "./auth.reducer"
import appoimentReducer from "../slice/appoimentslice"
import departmentReducer from "../slice/departmentslice"



export const rootReducer = combineReducers({
    doctor: doctordataReduce,
    medicine: medicineReducer,
    cart: addtoCartreducer,
    fav: myfavreducer,
    department:departmentReducer,
    alert:alertReducer,
    auth:authReducer,
    appoiment:appoimentReducer,
  
    
    
})


