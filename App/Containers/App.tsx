import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../Redux/index'
import AppWithNavigationState from '../Navigation/ReduxNavigation'

const store = configureStore()

export interface Props {}

export default class App extends PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
