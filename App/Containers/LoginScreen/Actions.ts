import { LoginRequest, LoginRequestSuccess, LoginRequestFailure } from './Constants'
export interface LoginInfoParams {
  password: string
  username: string
}

export interface LoginResposeData {
  token: string
  usernmae: string
  id: number
  avatar: string
}

export const loginRequest = (params: LoginInfoParams) => {
  return {
    type: LoginRequest,
    payload: params,
  }
}

export const loginRequestSuccess = (data: LoginResposeData) => {
  return {
    type: LoginRequestSuccess,
    data,
  }
}

export const loginRequestFailure = (err: string) => {
  return {
    type: LoginRequestFailure,
    err,
  }
}
