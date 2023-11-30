import { createListenerMiddleware } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { addACategory, loadOneCategory } from 'store/reducers/categories';
import createTask from './utils/createTask';

export const categoriesListener = createListenerMiddleware();

categoriesListener.startListening({
  actionCreator: loadOneCategory,
  effect: async (action, { fork, dispatch, getState, unsubscribe }) => {
    const { categories } = getState();
    const nameCategorie = action.payload;
    const categoryLoaded = categories.some(categorie => categorie.id === nameCategorie);

    if (categoryLoaded) return;
    if (categories.length === 5) return unsubscribe();

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