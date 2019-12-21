import { createAction } from "redux-actions";

import * as actionTypes from "../actionTypes/analytics";

export const doAddAnalyticsToStore = createAction(actionTypes.ADD_ANALYTICS_TO_STORE);
