import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import RootScreen from './RootScreen/index'
import configureStore from '../Redux/index'

const store = configureStore()

export interface Props {}

export default class App extends PureComponent<Props> {
  render() {
    console.log(store.getState())

    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
  }
}
