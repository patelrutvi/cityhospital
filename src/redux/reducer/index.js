import { combineReducers } from "redux"
// import { counterReduce } from "./counter.reduce"
import { doctordataReduce } from "./doctordata.reduce"
import { medicineReducer } from "./medicine.reducer"
import { addtoCartreducer } from "./addtocart.reducer"
import { myfavreducer } from "./myfav.reducer"
// import counterReduce from "../../slice/counterslice"
import { departmentReducer } from "./department.reducer"


export const rootReducer = combineReducers({
    // counter: counterReduce,
    // counter: counterReduce,
    doctor: doctordataReduce,
    medicine: medicineReducer,
    cart: addtoCartreducer,
    fav: myfavreducer,
    department:departmentReducer

})


