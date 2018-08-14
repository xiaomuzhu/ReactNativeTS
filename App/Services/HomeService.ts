import { TopicResposeData, RequestParams } from '../Containers/HomeScreen/Actions'
import { baseURL } from '../Configs/url'
import { ApiResponse, create } from 'apisauce'

export interface TopicApi {
  getTopicsRequest: (params: RequestParams) => Promise<ApiResponse<TopicResposeData>>
}

const HomeApi = (url = baseURL): TopicApi => {
  const api = create({
    baseURL: url,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  })

  const getTopicsRequest = (params: RequestParams) => {
    return api.get<TopicResposeData>('topics', params)
  }

  return { getTopicsRequest }
}

export default HomeApi
