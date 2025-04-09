import { call, put, takeLatest } from 'redux-saga/effects';
import { submitSalesActivity, submitSalesActivitySuccess, submitSalesActivityFailure } from './slice';
import { salesActivityService } from '../../services/salesActivityService';
import { SalesActivity } from './types';

function* submitSalesActivitySaga(action: ReturnType<typeof submitSalesActivity>) {
  try {
    yield call(salesActivityService.submitSalesActivity, action.payload);
    yield put(submitSalesActivitySuccess());
  } catch (error) {
    yield put(submitSalesActivityFailure(error.message));
  }
}

export function* salesActivitySaga() {
  yield takeLatest(submitSalesActivity.type, submitSalesActivitySaga);
}
