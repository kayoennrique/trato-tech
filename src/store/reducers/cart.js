import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
          amount: 1
        }
      ];
      return state.filter(item => item.id !== payload);
    },
    changeAmount: (state, { payload }) => {
      state = state.map(itemInCart => {
        if(itemInCart.id === payload.id) itemInCart.amount += payload.amount;
        return itemInCart;
      })
    },
    resetCart: () => initialState,
  }
});

export const { resetCart, changeAmount, resetSearch, cartChange } = cartSlice.actions;

export default cartSlice.reducer;