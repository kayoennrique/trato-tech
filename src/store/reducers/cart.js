import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartChange: (state, { payload }) => {
            const hasItem = state.some(item => item.id === payload);
            if (!hasItem) return [
                ...state,
                {
                    id: payload,
                    quantity: 1
                }
            ];
            return state.filter(item => item.id !== payload);
        }
    }
});

export const { cartChange } = cartSlice.actions;

export default cartSlice.reducer;