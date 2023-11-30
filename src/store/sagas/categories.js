import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { addAllCategories, loadCategories } from 'store/reducers/categories';
import { createStandaloneToast } from '@chakra-ui/toast';
import categoriesService from 'services/categories';

const { toast } = createStandaloneToast();

function* observeCategories() {
    toast({
        title: 'Carregando',
        description: 'Carregando categorias',
        status: 'loading',
        duration: 2000,
        isClosable: true
    });
    try {
        yield delay(1000);
        const categories = yield call(categoriesService.search);
        yield put(addAllCategories(categories));
        toast({
            title: 'Sucesso!',
            description: 'Categorias carregadas com sucesso!',
            status: 'success',
            duration: 2000,
            isClosable: true
        });

    } catch (erro) {
        toast({
            title: 'Erro',
            description: 'Erro na busca de categorias',
            status: 'error',
            duration: 2000,
            isClosable: true
        });
    }
}

export function* categoriesSaga() {
    yield takeEvery(loadCategories, observeCategories);
}