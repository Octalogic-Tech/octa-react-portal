import { handleActions } from "redux-actions";

import * as actionCreators from "../actionCreators/client";

const defaultState = {
  clientData: null,
  isFetching: true,
};

const client = handleActions(
  {
    [actionCreators.doFetchClientInfo]: state => {
      return { ...state, isFetching: true };
    },
    [actionCreators.doFetchClientInfoSuccess]: (state, { payload }) => {
      return { ...state, isFetching: false, clientData: payload.data };
    },
    [actionCreators.doFetchClientInfoFailure]: (state, { payload: { message } }) => {
      return { ...state, isFetching: false };
    },
    [actionCreators.doSendClientInfoSuccess]: (state, { payload: { data } }) => {
      return { ...state };
    },
  },
  defaultState,
);

export default client;
