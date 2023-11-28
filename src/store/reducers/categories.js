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
  extraReducers: builder => {
    builder
    .addCase(
      searchCategories.fulfilled,
      (state, { payload }) => {
        console.log('categorias carregado!');
        return payload;
      }
    )
    .addCase(
      searchCategories.pending,
      (state, { payload }) => {
        console.log('carregando categorias');
      }
    )
    .addCase(
      searchCategories.rejected,
      (state, { payload }) => {
        console.log('busca de categorias rejeitada!');
      }
    )
  }
});

export default categoriesSlice.reducer;