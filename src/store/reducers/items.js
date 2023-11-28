import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import itemsService from 'services/items';
import { v4 as uuid } from 'uuid';

export const searchItems = createAsyncThunk(
  'items/buscar',
  itemsService.search
);

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
  },
  extraReducers: builder => {
    builder.addCase(
      searchItems.fulfilled,
      (state, { payload }) => {
        state.push(...payload)
      }
    );
  }
});

export const { favoriteChange, registerItem, itemChange, itemDelete, addItems } = itemsSlice.actions;

export default itemsSlice.reducer;