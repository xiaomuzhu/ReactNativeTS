import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { Root } from 'native-base'

import configureStore from '../Redux/index'
import AppNavigator from '../Navigation/ReduxNavigation'

const store = configureStore()

export interface Props {}

export default class App extends PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    )
  }
}
