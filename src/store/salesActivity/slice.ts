import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SalesActivity, SalesActivityState } from './types';

const initialState: SalesActivityState = {
  formData: {
    activityType: '',
    activityDate: '',
    activityTime: '',
    duration: 0,
    durationUnit: 'minutes',
    assignedTo: '',
    notes: '',
  },
  isSubmitting: false,
  error: null,
};

const salesActivitySlice = createSlice({
  name: 'salesActivity',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<SalesActivity>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    submitSalesActivity: (state) => {
      state.isSubmitting = true;
      state.error = null;
    },
    submitSalesActivitySuccess: (state) => {
      state.isSubmitting = false;
      // Reset form data on successful submission
      state.formData = initialState.formData;
    },
    submitSalesActivityFailure: (state, action: PayloadAction<string>) => {
      state.isSubmitting = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateFormData,
  submitSalesActivity,
  submitSalesActivitySuccess,
  submitSalesActivityFailure,
} = salesActivitySlice.actions;

export default salesActivitySlice.reducer;
