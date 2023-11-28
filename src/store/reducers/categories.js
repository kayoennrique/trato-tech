import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';

const initialState = [];

export const searchCategories = createAsyncThunk(
  'categorias/buscar',
  categoriesService.search
);

const categoriesSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCategories: (state, { payload }) => {
      state.push(...payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(
      searchCategories.fulfilled,
      (state, { payload }) => {
        state.push(...payload);
      }
    )
  }
});

export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;