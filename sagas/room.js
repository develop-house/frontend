import { call, delay, put, takeEvery } from 'redux-saga/effects';
import * as feedAPI from '../api/feed.js';
import {
  GET_ROOM_DATA,
  GET_ROOM_DATA_SUCCESS,
  GET_ROOM_DATA_ERROR,
} from '../reducers/room';

function* roomDataSaga(action) {
  try {
    const data = yield call(feedAPI.getRoom);
    yield delay(1000);
    yield put({
      type: GET_ROOM_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: GET_ROOM_DATA_ERROR,
    });
  }
}

export function* roomSaga() {
  yield takeEvery(GET_ROOM_DATA, roomDataSaga);
}
