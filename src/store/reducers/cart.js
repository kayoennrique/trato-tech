import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = { data: [], total: 0 };

export const loadPayment = createAction('carrinho/loadPayment');

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
        if (itemInCart.id === payload.id) itemInCart.amount += payload.amount;
        return itemInCart;
      })
    },
    resetCart: () => initialState,
    changeTotal: (state, { payload }) => {
      state.total = payload;
    }
  }
});

export const { resetCart, changeAmount, cartChange, changeTotal } = cartSlice.actions;

export default cartSlice.reducer;