import { all, fork } from 'redux-saga/effects'
import watchTopicList from '../Containers/HomeScreen/Sagas'
import watchLogin from '../Containers/LoginScreen/Sagas'
export default function* root() {
  yield all([fork(watchTopicList), fork(watchLogin)])
}
