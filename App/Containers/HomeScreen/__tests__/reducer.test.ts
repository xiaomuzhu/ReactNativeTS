import 'jest'
import * as Immutable from 'immutable'

import { TopicRequest, TopicRequestFailure } from './../Constants'
import HomeReducer, { homeState, HomeActionType } from './../Reducers'
import { TopicRequestSuccess } from '../Constants'

test(TopicRequest, () => {
  expect(
    HomeReducer(homeState, {
      type: TopicRequest,
      payload: { page: 1, tab: 'all', limit: 20, mdrender: 'true' },
    } as HomeActionType),
  ).toEqual(homeState.set('isLoading', true))
})

test(TopicRequestSuccess, () => {
  expect(
    HomeReducer(homeState, {
      type: TopicRequestSuccess,
      data: [],
    } as HomeActionType),
  ).toEqual(homeState.set('isLoading', false).set('topicList', Immutable.fromJS([])))
})

test(TopicRequestFailure, () => {
  expect(
    HomeReducer(homeState, {
      type: TopicRequestFailure,
      err: 'err',
    } as HomeActionType),
  ).toEqual(homeState.set('isLoading', false).set('err', 'err'))
})
