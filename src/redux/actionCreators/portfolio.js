import { createAction } from "redux-actions";

import * as actionTypes from "../actionTypes/portfolio";

export const doFetchPortfolio = createAction(actionTypes.PORTFOLIO_DATA_REQUESTED);
export const doFetchPortfolioSuccess = createAction(actionTypes.PORTFOLIO_DATA_SUCCEEDED);
export const doFetchPortfolioFailure = createAction(actionTypes.PORTFOLIO_DATA_FAILED);
export const doFetchPortfolioErrorMessage = createAction(actionTypes.PORTFOLIO_DATA_ERROR);
