import { all } from "redux-saga/effects";

import portfolio from "./portfolio";
import client from "./client";

function* watchAll() {
  yield all([...portfolio, ...client]);
}

export default watchAll;
