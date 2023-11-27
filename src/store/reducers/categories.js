import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCategories: (state, { payload }) => {
      state.push(...payload);
    }
  }
});

export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;