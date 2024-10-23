import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload //new plant coming
        const existingItem = state.items.find(item => item.name === name) //check if the item has already in the array
        if (existingItem){
            existingItem.updateQuantity++;
        }
        else {
            state.items.push({name, image, cost, quantity: 1})
        }

    },

    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name != action.payload)
    },

    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload
        const itemToUpdate = state.items.find(item => item.name === name)
        if (itemToUpdate){
            itemToUpdate.quantity = quantity
        } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;