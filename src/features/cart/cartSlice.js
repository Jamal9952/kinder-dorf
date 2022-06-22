import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            state.items.push(item)
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;