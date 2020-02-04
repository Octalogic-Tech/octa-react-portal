import { createAction } from "redux-actions";

import * as actionTypes from "../actionTypes/client";

export const doFetchClientInfo = createAction(actionTypes.CLIENT_INFO_REQUEST);
export const doFetchClientInfoSuccess = createAction(actionTypes.CLIENT_INFO_SUCCEEDED);
export const doFetchClientInfoFailure = createAction(actionTypes.CLIENT_INFO_FAILED);

export const doSendClientInfo = createAction(actionTypes.CLIENT_INFO_SEND_REQUEST);
export const doSendClientInfoSuccess = createAction(actionTypes.CLIENT_INFO_SEND_SUCCEEDED);
