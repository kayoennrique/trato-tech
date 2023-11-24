import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
  }
});

export default store;