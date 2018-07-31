import { call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse } from 'apisauce'
import { SagaIterator } from 'redux-saga'
import RootApi from './../../Services/RootService'
import {
  TopicResposeData,
  topicRequestSuccess,
  topicRequestFailure,
  RequestParams,
  TopicRespose,
} from './Actions'
import { TopicRequest } from './Constants'

export function* getTopicList(params: RequestParams): SagaIterator {
  const response: ApiResponse<TopicRespose> = yield call(RootApi().getTopicsRequest, params)

  if (response.ok) {
    const data: TopicResposeData = response.data!.data
    yield put(topicRequestSuccess(data))
  } else {
    yield put(topicRequestFailure(response.problem))
  }
}

export default function* watchTopicList() {
  // @ts-ignore
  yield takeLatest(TopicRequest, getTopicList)
}
