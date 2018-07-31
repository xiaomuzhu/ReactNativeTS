import { TopicRequest, TopicRequestSuccess, TopicRequestFailure } from './Constants'
import { topicRequest, topicRequestSuccess, topicRequestFailure, TopicItem } from './Actions'

export type GetTopicsActionType = ReturnType<typeof topicRequest>
export type GetTopicsSuccessActionType = ReturnType<typeof topicRequestSuccess>
export type GetTopicsFailureActionType = ReturnType<typeof topicRequestFailure>

export type RootActionType = GetTopicsActionType &
  GetTopicsSuccessActionType &
  GetTopicsFailureActionType

export interface RootState {
  isLoading: boolean
  err: string | null
  topicList: TopicItem[] | never[]
}

const initialState: RootState = {
  isLoading: false,
  err: null,
  topicList: [],
}

const RootReducer = (state = initialState, action: RootActionType) => {
  switch (action.type) {
    case TopicRequest:
      return {
        ...state,
        isLoading: true,
      }
    case TopicRequestSuccess:
      return {
        ...state,
        topicList: action.data,
        isLoading: false,
      }
    case TopicRequestFailure:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      }
    default:
      return state
  }
}

export default RootReducer
