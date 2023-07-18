import { combineReducers } from "redux"
import { counterReduce } from "./counter.reduce"
import { doctordataReduce } from "./doctordata.reduce"

export const rootReducer = combineReducers ({
    counter : counterReduce ,
    doctor : doctordataReduce
})

