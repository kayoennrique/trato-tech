import { createStandaloneToast } from '@chakra-ui/toast';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { resetCart } from './cart';

const { toast } = createStandaloneToast();

const initialState = [];

export const loadCategories = createAction('categorias/loadCategories');
export const loadOneCategory = createAction('categorias/loadOneCategory');

export const searchCategories = createAsyncThunk(
  'categorias/search',
  categoriesService.search
);

const categoriesSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addAllCategories: (state, { payload }) => {
      return payload;
    },
    addACategory: (state, { payload }) => {
      state.push(payload);
    }
  },
  extraReducers: builder => {
    builder
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

export const { addAllCategories, addACategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;