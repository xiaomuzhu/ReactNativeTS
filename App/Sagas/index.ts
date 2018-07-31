import { all, fork } from 'redux-saga/effects'
import watchTopicList from '../Containers/RootScreen/Sagas'
export default function* root() {
  yield all([fork(watchTopicList)])
}
