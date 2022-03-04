import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import statisticReducer from '../features/statistics/statisticSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stistic_state: statisticReducer,
  },
});
