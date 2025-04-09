import { all } from 'redux-saga/effects';
import { salesActivitySaga } from './salesActivity/sagas';

export default function* rootSaga() {
  yield all([
    salesActivitySaga(),
  ]);
}
