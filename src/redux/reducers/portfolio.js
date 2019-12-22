import { handleActions } from "redux-actions";

import * as actionCreators from "../actionCreators/portfolio";

import { simulatedPortfolioData } from "../simulators/portfolio";
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
      const data = simulatedPortfolioData.payload;
      return { ...state, isFetching: false, portfolioData: data };
    },
  },
  defaultState,
);

export default portfolio;
