import { call } from 'redux-saga/effects';
import { observeCategories } from './categories';
import categoriesService from 'services/categories';

describe('Testing saga categories', () => {
  describe('workers', () => {
    test('Must run categoriesService.search', () => {
      const generatorFunction = observeCategories();
      const functionExpected = call(categoriesService.search);

      generatorFunction.next();

      const functionExecuted = generatorFunction.next();

      expect(functionExecuted.value).toEqual(functionExpected);
    });
  });
});