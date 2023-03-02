/* eslint-disable import/no-extraneous-dependencies */
import type { AxiosResponse } from "axios";
import axios from "axios";
import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";

import { failure, loadDataSuccess, tickClock } from "./actions";
import type { User } from "./interface";
import { ActionTypes } from "./interface";

function* runClockSaga() {
  yield take(ActionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const { status, data }: AxiosResponse<User[]> = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );

    if (status === 200) {
      yield put(loadDataSuccess(data));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga(): Generator {
  yield all([
    call(runClockSaga),
    takeLatest(ActionTypes.LOAD_DATA, loadDataSaga),
  ]);
}

export default rootSaga;
