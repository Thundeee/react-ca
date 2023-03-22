import { createSlice } from '@reduxjs/toolkit';
import useApi from '../../hooks/useApi';
import { BASE_URL } from '../../utils/constant';
const initialState = {
    items: [],
};

export const itemSlice = createSlice({
  // The name of our reducer
  name: 'items',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    ItemStuff: (state, action) => {
        state.items = useApi(BASE_URL);
    
    },
  },
});

export const { ItemStuff } = itemSlice.actions;

export default itemSlice.reducer;