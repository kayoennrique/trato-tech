import { createStandaloneToast } from '@chakra-ui/toast';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import categoriesService from 'services/categories';
import { addAllCategories, loadCategories, loadOneCategory } from 'store/reducers/categories';
import createTask from './utils/createTask';

export const listener = createListenerMiddleware();
const { toast } = createStandaloneToast();

listener.startListening({
  actionCreator: loadCategories,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    await createTask({
      fork,
      dispatch,
      action: addAllCategories,
      search: categoriesService.search,
      textLoading: 'Carregando categorias',
      textSucess: 'Categorias carregadas com sucesso!',
      textErro: 'Erro na busca de categorias',
    });
      unsubscribe();
  }
});

listener.startListening({
  actionCreator: loadOneCategory,
  effect: async () => {
     console.log('carregar apenas uma categorias');
  }
})