import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';
import cartSlice from "./reducers/cart";
import searchSlice from './reducers/search';
import { categoriesListener } from './middleware/categories';
import { itemsListener } from './middleware/items';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    cart: cartSlice,
    search: searchSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(categoriesListener.middleware,
    itemsListener.middleware
    ),
});

export default store;