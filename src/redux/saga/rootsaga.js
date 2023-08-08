import { all } from "redux-saga/effects";
import { authsaga } from "./authsaga";

export function* rootsaga(){
    yield all ([
        authsaga()
    ])
}