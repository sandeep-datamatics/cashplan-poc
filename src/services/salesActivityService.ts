import api from './api';
import { SalesActivity } from '../store/salesActivity/types';

export const salesActivityService = {
  submitSalesActivity: async (data: SalesActivity): Promise<void> => {
    try {
      const response = await api.post('/sales-activities', data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to submit sales activity');
    }
  },

  // Add more API calls related to sales activities here
  // For example:
  // getSalesActivities: async (): Promise<SalesActivity[]> => {
  //   const response = await api.get('/sales-activities');
  //   return response.data;
  // },
};
