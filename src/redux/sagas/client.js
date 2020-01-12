import { call, put, takeLatest } from "redux-saga/effects";

import * as actionCreators from "../actionCreators/client";
import * as actionTypes from "../actionTypes/client";
import * as APIService from "../../services/APIService";

function* fetchClientInfo({ payload }) {
  try {
    const response = yield call(APIService.fetchClientInfo, payload);
    yield put(actionCreators.doFetchClientInfoSuccess(response));
  } catch (error) {
    yield put(actionCreators.doFetchClientInfoFailure(error));
  }
}

function* sendClientInfo({ payload }) {
  try {
    const response = yield call(APIService.sendClientInfo, payload);
    yield put(actionCreators.doSendClientInfoSuccess(response));
  } catch (error) {
    console.log("Error occurred when sending client information");
  }
}

const messagingSaga = [
  takeLatest(actionTypes.CLIENT_INFO_REQUEST, fetchClientInfo),
  takeLatest(actionTypes.CLIENT_INFO_SEND_REQUEST, sendClientInfo),
];

export default messagingSaga;
