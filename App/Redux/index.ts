/// <reference types="@types/webpack-env" />
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './RootReducers'

const configureStore = () => {
  const store = createStore(rootReducers, composeWithDevTools())
  store.injectedReducers = {}

  if (module.hot) {
    module.hot.accept('./RootReducers', () => {
      store.replaceReducer(rootReducers)
    })
  }

  return store
}

export default configureStore
