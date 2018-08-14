import { createSelector } from 'reselect'
import { State } from './../../Redux/RootReducers'

const selectHome = (state: State) => state.home

const makeSelectTopicList = createSelector([selectHome], homeState => homeState.topicList)

export { selectHome, makeSelectTopicList }
