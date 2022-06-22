import { createSlice } from '@reduxjs/toolkit';


export const uiSlice =  createSlice({
    name: 'ui',
    initialState: {modelIsVisible: false},
    reducers: {
        toggle: (state) => {
            state.modelIsVisible = !state.modelIsVisible
        }
    } 
})

export const { toggle } = uiSlice.actions

export default uiSlice.reducer;