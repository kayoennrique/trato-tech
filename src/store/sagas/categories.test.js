import { call, cancel, take } from "redux-saga/effects";
import { categoriesSaga, observeCategories } from "./categories";
import categoriesService from "services/categories";
import { addAllCategories } from "store/reducers/categories";
import { createMockTask } from "@redux-saga/testing-utils";

describe("Testing saga categories", () => {
  describe("workers", () => {
    it("Must run categoriesService.search", () => {
      const generatorFunction = observeCategories();
      const functionExpected = call(categoriesService.search);

      generatorFunction.next();

      const functionExecuted = generatorFunction.next();

      expect(functionExecuted.value).toEqual(functionExpected);
    });
  });
  describe('watchers', () => {
    it('Must perform the task correctly', () => {
      const generatorFunction = categoriesSaga();
      generatorFunction.next();
      const functionExpected = take(addAllCategories);

      expect(generatorFunction.next().value).toEqual(functionExpected);
    });
    it('You must perform the task only once', () => {
      const generatorFunction = categoriesSaga();
      const mockTask = createMockTask();
      generatorFunction.next(mockTask);
      const functionCancelExpected = cancel(mockTask.cancel());
      generatorFunction.next();

      expect(generatorFunction.next().value).toEqual(functionCancelExpected);
    });
  });
});
