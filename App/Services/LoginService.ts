import { LoginResposeData, LoginInfoParams } from './../Containers/LoginScreen/Actions'
import { baseURL } from '../Configs/url'
import { ApiResponse, create } from 'apisauce'

export interface TopicApi {
  postLoginRequest: (params: LoginInfoParams) => Promise<ApiResponse<LoginResposeData>>
}

const LoginApi = (url = baseURL): TopicApi => {
  const api = create({
    baseURL: url,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  })

  const postLoginRequest = (params: LoginInfoParams) => {
    return api.post<LoginResposeData>('login', params)
  }

  return { postLoginRequest }
}

export default LoginApi
