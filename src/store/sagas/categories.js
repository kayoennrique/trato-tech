import { takeEvery } from 'redux-saga/effects';
import { searchCategories } from 'store/reducers/categories';

function* observeCategories() {
        yield console.log('observando');
    }

export function* categoriesSaga() {
    yield takeEvery(searchCategories, observeCategories);
}