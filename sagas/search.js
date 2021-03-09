import { call, delay, put, takeEvery } from 'redux-saga/effects';
import * as searchAPI from '../api/search.js';
import {
  GET_SEARCH_DATA,
  GET_SEARCH_DATA_SUCCESS,
  GET_SEARCH_DATA_ERROR,
} from '../reducers/search';

function* searchDataSaga(action) {
  try {
    const category = action.category;
    // const keyword = action.keyword;
    const data = yield call(
      category === 'people' ? searchAPI.searchPeople : searchAPI.searchClub
    );
    yield delay(1000);
    yield put({
      type: GET_SEARCH_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: GET_SEARCH_DATA_ERROR,
    });
  }
}

export function* searchSaga() {
  yield takeEvery(GET_SEARCH_DATA, searchDataSaga);
}
