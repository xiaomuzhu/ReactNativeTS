import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ApiResponse } from 'apisauce'
import { SagaIterator } from 'redux-saga'
import LoginApi from '../../Services/LoginService'
import { LoginRequest } from './Constants'
import { LoginResposeData, loginRequestSuccess, loginRequestFailure } from './Actions'

export function* postLoginRequest(params: any): SagaIterator {
  const response: ApiResponse<LoginResposeData> = yield call(LoginApi().postLoginRequest, params)

  if (response.ok) {
    const data: LoginResposeData = response.data!
    yield put(loginRequestSuccess(data))
  } else {
    yield put(loginRequestFailure(response.problem))
  }
}

export default function* watchLogin() {
  yield all([takeLatest(LoginRequest, postLoginRequest)])
}
