import { createListenerMiddleware } from ("@reduxjs/toolkit");

export const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: searchCategories.pending,
  effect: async (action) => {
    console.log('buscando categorias: ', action);
  }
});