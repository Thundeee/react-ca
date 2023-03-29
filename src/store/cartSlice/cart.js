import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [window.sessionStorage.getItem('cart')],
};

export const cartSlice = createSlice({
  // The name of our reducer
  name: 'cart',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    updateItems: (state, action) => {
        state.items = window.sessionStorage.getItem('cart')
        
        

      //

    },
  },
});

export const { updateItems } = cartSlice.actions;

export default cartSlice.reducer;