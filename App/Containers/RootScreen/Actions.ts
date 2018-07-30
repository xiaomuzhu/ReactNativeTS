// import { createAction, createStandardAction, action } from 'typesafe-actions';
import { TopicRequest, TopicRequestSuccess, TopicRequestFailure } from './Constants'

export interface RequestParams {
  page: number
  tab: string
  limit?: number
  mdrender?: string
}

export interface AuthorInfo {
  loginname: string
  avatar_url: string
}

export interface TopicItem {
  id: string
  author_id: string
  tab: string
  content: string
  title: string
  last_reply_at: string
  good: boolean
  top: boolean
  reply_count: number
  visit_count: number
  create_at: string
  author: AuthorInfo
}

export type TopicResposeData = TopicItem[] | never[]

export interface TopicRespose {
  success: boolean
  data: TopicResposeData
}

export const topicRequest = (params: RequestParams) => {
  return {
    type: TopicRequest,
    plyload: params,
  }
}

export const topicRequestSuccess = (data: TopicResposeData) => {
  return {
    type: TopicRequestSuccess,
    plyload: data,
  }
}

export const topicRequestFailure = (err: Object) => {
  return {
    type: TopicRequestFailure,
    plyload: err,
  }
}

// export const actions = {
//     topicRequest: createStandardAction(TopicRequest)<RequestParams>(),
//     topicRequestSuccess: createAction(TopicRequestSuccess, resolve => {
//         return (data: TopicResposeData) => resolve(data);
//     }),
//     topicRequestFailure: createAction(TopicRequestFailure, resolve => {
//         return (err: Object) => resolve(err);
//     }),
// }

export const add = (age: string) => {
  return {
    type: 'add',
    payload: age,
  }
}
