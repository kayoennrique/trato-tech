import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    favoriteChange: (state, { payload }) => {
      state.map(item => {
        if (item.id === payload) item.favorite = !item.favorite;
        return item;
      })
    },
    registerItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    itemChange: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    itemDelete: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      state.splice(index, 1)
    },
    addItems: (state, { payload }) => {
      state.push(...payload);
    }
  }
});

export const { favoriteChange, registerItem, itemChange, itemDelete, addItems } = itemsSlice.actions;

export default itemsSlice.reducer;