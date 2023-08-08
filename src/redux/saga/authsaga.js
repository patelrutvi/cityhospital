import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionType from '../ActionType'
import { signupApi } from '../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    console.log(action);
    try {
        const user = yield call(signupApi, action.payload)
        console.log(user,"user");
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* signupSaga() {
    yield takeEvery(ActionType.SIGN_UPREQUEST, signupUser)
}

export function* authsaga() {
    yield all([
        signupSaga()
    ])
}