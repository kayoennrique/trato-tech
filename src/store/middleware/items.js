import { createListenerMiddleware } from '@reduxjs/toolkit';
import { loadOneCategory } from 'store/reducers/categories';
import createTask from './utils/createTask';
import itemsService from 'services/items';
import { addItems } from 'store/reducers/items';

export const itemsListener = createListenerMiddleware();

itemsListener.startListening({
    actionCreator: loadOneCategory,
    effect: async (action, { fork, dispatch, unsubscribe, getState }) => {
        const { items } = getState();

        if (items.length === 25) return unsubscribe();

        const nameCategorie = action.payload;

        const itensCarregados = items.some(item => item.categorie === nameCategorie)

        if (itensCarregados) return;

        await createTask({
            fork,
            dispatch,
            action: addItems,
            search: () => itemsService.searchFromCategories(nameCategorie),
            textLoading: `Carregando itens da categoria ${nameCategorie}`,
            textSucess: `Itens da categoria ${nameCategorie} carregadas com sucesso!`,
            textErro: 'Erro na busca de itens',
        });
    }
});