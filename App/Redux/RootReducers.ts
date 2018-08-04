import { combineReducers } from 'redux'
import HomeReducer from '../Containers/HomeScreen/Reducers'
import { navReducer } from '../Navigation/ReduxNavigation'

const rootReducers = combineReducers({
  nav: navReducer,
  home: HomeReducer,
})

export type State = ReturnType<typeof rootReducers>

export default rootReducers
