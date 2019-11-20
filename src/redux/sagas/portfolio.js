import { call, put, takeLatest } from 'redux-saga/effects';

import * as actionCreators from '../actionCreators/portfolio';
import * as actionTypes from '../actionTypes/portfolio';
import * as APIService from '../../services/APIService';

function* fetchPortfolio({ payload }) {
  try {
    const response = yield call(APIService.fetchPortfolio, payload);
    yield put(actionCreators.doFetchPortfolioSuccess(response));
  } catch (error) {
    yield put(actionCreators.doFetchPortfolioFailure(error));
  }
}

const messagingSaga = [
  takeLatest(actionTypes.PORTFOLIO_DATA_REQUESTED, fetchPortfolio),
];

export default messagingSaga;
