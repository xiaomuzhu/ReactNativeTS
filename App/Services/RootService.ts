import { TopicResposeData, RequestParams } from './../Containers/RootScreen/Actions'
import { baseURL } from './../Configs/url'
import { ApiResponse, create } from 'apisauce'

export interface TopicApi {
  getTopicsRequest: (params: RequestParams) => Promise<ApiResponse<TopicResposeData>>
}

const RootApi = (url = baseURL): TopicApi => {
  const api = create({
    baseURL: url,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 10000,
  })

  const getTopicsRequest = (params: {
    page: number
    tab: string
    limit?: number
    mdrender?: string
  }) => {
    return api.get<TopicResposeData>('topics', params)
  }

  return { getTopicsRequest }
}

export default RootApi
