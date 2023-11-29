import { createListenerMiddleware } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { addACategory, addAllCategories, loadCategories, loadOneCategory } from 'store/reducers/categories';
import createTask from './utils/createTask';

export const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: loadCategories,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    const response = await createTask({
      fork,
      dispatch,
      action: addAllCategories,
      search: categoriesService.search,
      textLoading: 'Carregando categorias',
      textSucess: 'Categorias carregadas com sucesso!',
      textErro: 'Erro na busca de categorias',
    });
    if (response.status === 'ok') {
      unsubscribe();      
      }
  }
});

listener.startListening({
  actionCreator: loadOneCategory,
  effect: async (action, { fork, dispatch }) => {
    const nameCategorie = action.payload;
    await createTask({
      fork,
      dispatch,
      action: addACategory,
      search: () => categoriesService.searchOneCategory(nameCategorie),
      textLoading: `Carregando categoria ${nameCategorie}`,
      textSucess: `Categoria ${nameCategorie} carregada com sucesso!`,
      textErro: `Erro na busca da categoria ${nameCategorie}`,
    });
  }
})