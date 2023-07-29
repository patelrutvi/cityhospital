import { combineReducers } from "redux"
import { counterReduce } from "./counter.reduce"
import { doctordataReduce } from "./doctordata.reduce"
import { medicineReducer } from "./medicine.reducer"
import { addtoCartreducer } from "./addtocart.reducer"
import {myfavreducer} from "./myfav.reducer"



export const rootReducer = combineReducers({
    counter: counterReduce,
    doctor: doctordataReduce,
    medicine: medicineReducer,
    cart:addtoCartreducer,
   fav : myfavreducer
})


