import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionType'
import { forgotApi, loginApi, signupApi } from '../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    console.log(action);
    try {
        const user = yield call(signupApi, action.payload)
        console.log(user);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {

        console.log(e);
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* loginUser(action) {
    console.log(action);
    try {
        const user = yield call(loginApi, action.payload)
        console.log(user);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        console.log(e);
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* forgotUser(action) {
    console.log(action);
    try {
        const user = yield call(forgotApi, action.payload)
        console.log(user);
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        console.log(e);
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}


// wathcher saga....
function* signupSaga() {
    yield takeEvery(ActionType.SIGN_UPREQUEST, signupUser)
}

function* loginSaga() {
    yield takeEvery(ActionType.LOGIN_REQUEST, loginUser)
}
function* forgotSaga() {
    yield takeEvery(ActionType.FORGOT_REQUEST, forgotUser)
}

export function* authsaga() {
    yield all([
        signupSaga(),
        loginSaga(),
        forgotSaga()
    ])
}