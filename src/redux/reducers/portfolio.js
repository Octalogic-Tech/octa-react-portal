import { handleActions } from "redux-actions";

import * as actionCreators from "../actionCreators/portfolio";

// import { simulatedPortfolioData } from "../simulators/portfolio";
// import {  backendSimulated } from "../simulators/portfolio";

const defaultState = {
  portfolioData: {},
  isFetching: true,
};

const portfolio = handleActions(
  {
    [actionCreators.doFetchPortfolio]: state => {
      return { ...state, isFetching: true };
    },
    [actionCreators.doFetchPortfolioSuccess]: (state, { payload: { data } }) => {
      return { ...state, isFetching: false, portfolioData: data.payload };
    },
    [actionCreators.doFetchPortfolioFailure]: (state, { payload: { message } }) => {
      return { ...state, isFetching: false };
    },
    [actionCreators.doFetchPortfolioErrorMessage]: (state, { payload: { message } }) => {
      return { ...state, isFetching: false };
    },
  },
  defaultState,
);

export default portfolio;
