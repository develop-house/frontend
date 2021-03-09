import { call, delay, put, takeEvery } from 'redux-saga/effects';
import * as feedAPI from '../api/feed.js';
import {
  GET_EVENT_DATA,
  GET_EVENT_DATA_SUCCESS,
  GET_EVENT_DATA_ERROR,
} from '../reducers/event';

function* eventDataSaga(action) {
  try {
    const data = yield call(feedAPI.getEvent);
    yield delay(1000);
    yield put({
      type: GET_EVENT_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: GET_EVENT_DATA_ERROR,
    });
  }
}

export function* eventSaga() {
  yield takeEvery(GET_EVENT_DATA, eventDataSaga);
}
