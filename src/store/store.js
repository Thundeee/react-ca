import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './itemSlice/itemSlice';

export const store = configureStore({
  reducer: {
    cartHandling: cartSlice,
  },
});