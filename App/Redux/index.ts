/// <reference types="@types/webpack-env" />
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './RootReducers'
import rootSagas from '../Sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(rootSagas)
  store.runSaga = sagaMiddleware.run

  store.injectedReducers = {}
  store.injectedSagas = {}

  if (module.hot) {
    module.hot.accept('./RootReducers', () => {
      store.replaceReducer(rootReducers)
    })
  }

  return store
}

export default configureStore
