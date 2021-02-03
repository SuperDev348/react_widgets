import { all } from 'redux-saga/effects';
import jobSagas from './job/saga';
import hostSagas from './host/saga';

export default function* rootSaga(getState) {
  yield all([
    jobSagas(),
    hostSagas(),
  ]);
}
