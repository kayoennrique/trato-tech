import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';
import cartSlice from "./reducers/cart";
import searchSlice from './reducers/search';
import { categoriesListener } from './middleware/categories';
import { itemsListener } from './middleware/items';
import createSagaMiddleware from 'redux-saga';
import { categoriesSaga } from './sagas/categories';
import { cartSaga } from './sagas/cart';
import userSlice from './reducers/user';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    cart: cartSlice,
    search: searchSlice,
    user: userSlice
  },
  middleware:
    getDefaultMiddleware =>
      getDefaultMiddleware().prepend(
        categoriesListener.middleware,
        itemsListener.middleware,
        sagaMiddleware
      ),
});

sagaMiddleware.run(categoriesSaga);
sagaMiddleware.run(cartSaga);

export default store;