import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1
                })
                state.totalQuantity++
            } else {
                existingItem.quantity++
                state.totalQuantity++
                existingItem.price += newItem.price;
            }
        },
        
        removeItemFromCart (state, action) {
            console.log("action",action);
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            console.log("existingItem",existingItem);
            if (existingItem.quantity === 1) {
              state.items = state.items.filter(item => item.id !== id)
            } else {
                 existingItem.quantity--;
                 console.log("Check Item Price",existingItem.price);
                 existingItem.price -= existingItem.price;
                state.totalQuantity--;
            }
            if(state.items.length === 0 ){
                state.totalQuantity = 0;
            }
        }
    }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;