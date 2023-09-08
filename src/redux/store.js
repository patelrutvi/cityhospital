
import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { rootReducer } from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from "@redux-saga/core"
import { rootsaga } from "./saga/rootsaga"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['medicine', 'cart','fdapart','fdoctor']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const allMiddleware = [sagaMiddleware, thunk]

 const configureStore = () => {
   
    let store = createStore(persistedReducer, applyMiddleware(...allMiddleware))
    sagaMiddleware.run(rootsaga)

    return store
}
export let store = configureStore()
export let persistor = persistStore(store)