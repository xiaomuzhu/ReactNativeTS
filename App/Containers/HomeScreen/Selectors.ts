import { createSelector } from 'reselect'
import { State } from './../../Redux/RootReducers'

const selectRoot = (state: State) => state.home

const makeSelectTopicList = createSelector([selectRoot], rootState => rootState.topicList)

export { selectRoot, makeSelectTopicList }
