import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './auth/itemSlice';

export const store = configureStore({
  reducer: {
    Items: itemSlice,
  },
});