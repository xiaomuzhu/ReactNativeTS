import { combineReducers } from 'redux'
import RootReducer from '../Containers/RootScreen/Reducers'

const rootReducers = combineReducers({
  root: RootReducer,
})

export type State = ReturnType<typeof rootReducers>

export default rootReducers
