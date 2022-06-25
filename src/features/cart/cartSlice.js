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
        addItemFromCart: (state, action) => {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            const singleProductPrice = existingItem.price / existingItem.quantity;
            if(existingItem.id === id){
                existingItem.quantity++;
                state.totalQuantity++
                existingItem.price += singleProductPrice;
            }
        },

        removeItemFromCart: (state, action) => {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            const singleProductPrice = existingItem.price / existingItem.quantity;
            if (existingItem.quantity === 1) {
              state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.price = existingItem.price - singleProductPrice;
                state.totalQuantity--;
            }
            if(state.items.length === 0 ){
                state.totalQuantity = 0;
            }
        }
    }
})

export const { addItemToCart, addItemFromCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;