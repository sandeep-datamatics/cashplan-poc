import { combineReducers } from '@reduxjs/toolkit';
import salesActivityReducer from './salesActivity/slice';

const rootReducer = combineReducers({
  salesActivity: salesActivityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
