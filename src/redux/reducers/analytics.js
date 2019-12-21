import { handleActions } from "redux-actions";

import * as actionCreators from "../actionCreators/analytics";

const defaultState = {
  object: {},
};

const portfolio = handleActions(
  {
    [actionCreators.doAddAnalyticsToStore]: (state, { payload: { data } }) => {
      return { ...state, object: data };
    },
  },
  defaultState,
);

export default portfolio;
