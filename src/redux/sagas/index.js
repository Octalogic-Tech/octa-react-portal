import { all } from 'redux-saga/effects';

import portfolio from './portfolio';

function* watchAll() {
  yield all([
    ...portfolio,
  ]);
}

export default watchAll;
