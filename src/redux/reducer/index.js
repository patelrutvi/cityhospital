import { combineReducers } from "redux"
import { counterReduce } from "./counter.reduce"
import { doctordataReduce } from "./doctordata.reduce"
import { medicineReducer } from "./medicine.reducer"
import { userMediReduser } from "./usermedidata.reducer"
import { addtoCartreducer } from "./addtocart.reducer"

export const rootReducer = combineReducers({
    counter: counterReduce,
    doctor: doctordataReduce,
    medicine: medicineReducer,
    medicineUser : userMediReduser,
    cart:addtoCartreducer
})

