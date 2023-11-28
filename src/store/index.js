import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';
import cartSlice from "./reducers/cart";
import searchSlice from './reducers/search';
import { listener } from './middleware/categories';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    cart: cartSlice,
    search: searchSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listener.middleware),
});

export default store;