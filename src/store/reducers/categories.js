import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { resetCart } from './cart';

const { toast } = createStandaloneToast();

const initialState = [];

export const searchCategories = createAsyncThunk(
  'categorias/search',
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
        toast({
          title: 'Sucesso!',
          description: 'Categorias carregadas com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true
        })
        return payload;
      }
    )
    .addCase(
      searchCategories.pending,
      (state, { payload }) => {
        toast({
          title: 'Carregando',
          description: 'Carregando categorias',
          status: 'loading',
          duration: 2000,
          isClosable: true
        })
      }
    )
    .addCase(
      searchCategories.rejected,
      (state, { payload }) => {
        toast({
          title: 'Erro',
          description: 'Erro na busca de categorias',
          status: 'error',
          duration: 2000,
          isClosable: true
        })
      }
    )
    .addCase(
      resetCart.type,
      () => {
        toast({
          title: 'Sucesso!',
          description: 'Compra completada com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true
        })
      }
    )
  }
});

export default categoriesSlice.reducer;