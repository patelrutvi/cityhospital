import { combineReducers } from "redux"
import { counterReduce } from "./counter.reduce"

export const rootReducer = combineReducers ({
    counter : counterReduce
})

