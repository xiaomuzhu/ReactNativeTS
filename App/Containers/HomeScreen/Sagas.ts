import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ApiResponse } from 'apisauce'
import { SagaIterator } from 'redux-saga'
import RootApi from './../../Services/RootService'
import { TopicResposeData, topicRequestSuccess, topicRequestFailure, TopicRespose } from './Actions'
import { TopicRequest } from './Constants'

export function* getTopicList(params: any): SagaIterator {
  const response: ApiResponse<TopicRespose> = yield call(RootApi().getTopicsRequest, params)

  if (response.ok) {
    const data: TopicResposeData = response.data!.data
    yield put(topicRequestSuccess(data))
  } else {
    yield put(topicRequestFailure(response.problem))
  }
}

export default function* watchTopicList() {
  yield all([takeLatest(TopicRequest, getTopicList)])
}
