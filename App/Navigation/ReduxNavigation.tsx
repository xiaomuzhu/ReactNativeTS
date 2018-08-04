import * as reactNavigationReduxHelpers from 'react-navigation-redux-helpers'
import RootNavigator from './AppNavigation'
import { State } from '../Redux/RootReducers'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'

export const navReducer = reactNavigationReduxHelpers.createNavigationReducer(RootNavigator)

const mapStateToProps = (state: State) => ({
  state: state.nav!,
})

export const navigationMiddleware = reactNavigationReduxHelpers.createReactNavigationReduxMiddleware(
  'root',
  (state: State) => state.nav!,
)

const AppWithNavigationState = reactNavigationReduxHelpers.reduxifyNavigator<AnyAction>(
  RootNavigator,
  'root',
)

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export default AppNavigator
