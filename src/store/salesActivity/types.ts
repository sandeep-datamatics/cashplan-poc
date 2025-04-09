export interface SalesActivity {
  activityType: string;
  activityDate: string;
  activityTime: string;
  duration: number;
  durationUnit: 'minutes' | 'hours';
  assignedTo: string;
  notes: string;
}

export interface SalesActivityState {
  formData: SalesActivity;
  isSubmitting: boolean;
  error: string | null;
}
