import * as Immutable from 'immutable'

import { LoginRequest, LoginRequestSuccess, LoginRequestFailure } from './Constants'
import { loginRequest, loginRequestSuccess, loginRequestFailure, LoginInfoParams } from './Actions'

// Action Type
export type PostLoginActionType = ReturnType<typeof loginRequest>
export type PostLoginSuccessActionType = ReturnType<typeof loginRequestSuccess>
export type PostLoginFailureActionType = ReturnType<typeof loginRequestFailure>

export type LoginActionType = PostLoginActionType &
  PostLoginSuccessActionType &
  PostLoginFailureActionType

// initial State Type

export type LoginInfoRecord = Immutable.Record.Factory<LoginInfoParams>

export interface ILoginState {
  isLoading: boolean
  err: null | string
  loginInfo?: LoginInfoRecord
}

const InitialState = Immutable.Record({
  isLoading: false,
  err: null,
  loginInfo: undefined,
} as ILoginState)

export class LoginState extends InitialState {}

export const loginState = new LoginState()

// login reducer
const LoginReducer = (state = loginState, action: LoginActionType) => {
  switch (action.type) {
    case LoginRequest:
      return state.set('isLoading', true)
    case LoginRequestSuccess:
      const data = Immutable.fromJS(action.data) as LoginInfoRecord
      return state.set('isLoading', false).set('loginInfo', data)
    case LoginRequestFailure:
      return state.set('isLoading', false).set('err', action.err)
    default:
      return state
  }
}

export default LoginReducer
