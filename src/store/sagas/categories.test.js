import { call, cancel, take } from 'redux-saga/effects';
import { categoriesSaga, observeCategories } from './categories';
import categoriesService from 'services/categories';
import { addAllCategories } from 'store/reducers/categories';

describe('Testing saga categories', () => {
  describe('workers', () => {
    it('Must run categoriesService.search', () => {
      const generatorFunction = observeCategories();
      const functionExpected = call(categoriesService.search);

      generatorFunction.next();

      const functionExecuted = generatorFunction.next();

      expect(functionExecuted.value).toEqual(functionExpected);
    });
  });
  describe('watchers', () => {
    it('Deve executar corretamente', () => {
      const generatorFunction = categoriesSaga();
      const task = generatorFunction.next();
      const functionExpected = take(addAllCategories);
      const functionCancelExpected = cancel(task.value);

      expect(generatorFunction.next().value).toEqual(functionExpected);
      expect(generatorFunction.next().value).toEqual(functionCancelExpected);
    });
  });
});