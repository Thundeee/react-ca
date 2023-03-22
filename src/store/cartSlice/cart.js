import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [],
};

export const cartSlice = createSlice({
  // The name of our reducer
  name: 'cart',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    addItems: (state, action) => {
      //
    
    },

    removeItems: (state, action) => {
      //
    
  },

    
    
  },
});

export const { addItems, removeItems } = cartSlice.actions;

export default cartSlice.reducer;