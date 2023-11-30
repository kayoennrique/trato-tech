import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = { data: [], total: 0 };

export const loadPayment = createAction('carrinho/loadPayment');
export const finishPayment = createAction('carrinho/finishPayment');

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartChange: (state, { payload }) => {
      const hasItem = state.data.some(item => item.id === payload);
      if (!hasItem) return {
        total: state.total,
        data: [...state.data,
        {
          id: payload,
          amount: 1
        }
        ]
      }
      return {
        total: state.total,
        data: state.data.filter(item => item.id !== payload)
      }
    },
    changeAmount: (state, { payload }) => {
      state.data = state.data.map(itemInCart => {
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