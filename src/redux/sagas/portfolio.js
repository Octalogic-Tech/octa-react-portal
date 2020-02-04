import { call, put, takeLatest } from "redux-saga/effects";

import * as actionCreators from "../actionCreators/portfolio";
import * as actionTypes from "../actionTypes/portfolio";
import * as APIService from "../../services/APIService";

import { push } from "react-router-redux";

function* fetchPortfolio({ payload }) {
  try {
    const response = yield call(APIService.fetchPortfolio, payload);
    if (response && response.status === 500) {
      yield put(actionCreators.doFetchPortfolioErrorMessage(response));
      yield put(push("/server_error"));
    } else {
      yield put(actionCreators.doFetchPortfolioSuccess(response));
    }
  } catch (error) {
    yield put(actionCreators.doFetchPortfolioFailure(error));
  }
}

const messagingSaga = [takeLatest(actionTypes.PORTFOLIO_DATA_REQUESTED, fetchPortfolio)];

export default messagingSaga;
