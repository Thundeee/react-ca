import { createSlice } from '@reduxjs/toolkit';


const cartItems = JSON.parse(window.sessionStorage.getItem('cart'));
const initialQuantity = cartItems ? cartItems.reduce((total, item) => total + item.amount, 0) : 0;

const initialState = {
    quantity: initialQuantity
};

export const cartSlice = createSlice({
  // The name of our reducer
  name: 'cart',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    addItem: (state, action) => {
        // Add +1 to the quantity of the item
        state.quantity += 1;
    },
    removeItem: (state, action) => {
        // Remove -1 from the quantity of the item
        state.quantity -= 1;
    },

    clearItems: (state, action) => {
        // Remove all items from the cart
        state.quantity = 0;

    },
    
        
        

      //

    
  },
});


export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;