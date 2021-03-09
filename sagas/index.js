import { all } from 'redux-saga/effects';
import { searchSaga } from './search';
import { roomSaga } from './room';
import { eventSaga } from './event';

export default function* rootSaga() {
  yield all([searchSaga(), roomSaga(), eventSaga()]);
}
