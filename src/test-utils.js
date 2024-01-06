import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const Providers = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
)

export const renderWithProviders = (ui, options) =>
  render(ui, {
    wrapper: Providers,
    ...options,
  });

export * from '@testing-library/react';

export { renderWithProviders as render };