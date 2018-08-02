import { createSelector } from 'reselect'
import { State } from './../../Redux/RootReducers'

const selectRoot = (state: State) => state.root

const makeSelectTopicList = createSelector([selectRoot], rootState => rootState.topicList)

export { selectRoot, makeSelectTopicList }
