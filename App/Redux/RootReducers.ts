import { combineReducers } from 'redux'
import HomeReducer from '../Containers/HomeScreen/Reducers'
import { navReducer } from '../Navigation/ReduxNavigation'
import LoginReducer from '../Containers/LoginScreen/Reducers'

const rootReducers = combineReducers({
  nav: navReducer,
  home: HomeReducer,
  login: LoginReducer,
})

export type State = ReturnType<typeof rootReducers>

export default rootReducers
