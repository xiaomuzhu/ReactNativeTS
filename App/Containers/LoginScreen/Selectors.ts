import { createSelector } from 'reselect'
import { State } from './../../Redux/RootReducers'

const selectLogin = (state: State) => state.login

const makeSelectLoginInfo = createSelector([selectLogin], loginState => loginState.loginInfo)

const makeSelectLoading = createSelector([selectLogin], loginState => loginState.isLoading)

const makeSelectError = createSelector([selectLogin], loginState => loginState.err)

export { selectLogin, makeSelectLoginInfo, makeSelectLoading, makeSelectError }
