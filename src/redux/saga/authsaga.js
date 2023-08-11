import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionType'
import { forgotApi, loginApi, logoutApi, signupApi } from '../../common/apis/auth.api'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { setAlert } from '../slice/alertslice';
import { authError, authLoggedin, emailVarification } from '../action/auth.action';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    console.log(action);
    try {
        const user = yield call(signupApi, action.payload)
        yield put(emailVarification())
        yield put(setAlert({ text: user.message, color: 'success' }))
      
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
    }
}

function* loginUser(action) {
    console.log(action);
    try {
        const user = yield call(loginApi, action.payload)
        yield put(authLoggedin(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
     
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
      
    }
}

function* forgotUser(action) {
    console.log(action);
    try {
        const user = yield call(forgotApi, action.payload)
        console.log(user);
        yield put(setAlert({ text: user.message, color: 'success' }))
      
    } catch (e) {
        console.log(e);
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
       
    }
}

function* logoutUser(action) {
    console.log(action);
    try {
        const user = yield call(logoutApi, action.payload)
        console.log(user);
        yield put(setAlert({ text: user.message, color: 'success' }))
      
    } catch (e) {
        console.log(e);
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
       
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
function* logoutSaga() {
    yield takeEvery(ActionType.LOG_OUT, logoutUser)
}

export function* authsaga() {
    yield all([
        signupSaga(),
        loginSaga(),
        forgotSaga(),
        logoutSaga()
    ])
}