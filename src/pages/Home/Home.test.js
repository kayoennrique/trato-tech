import Home from '.';
import { render, screen } from '../../test-utils';

jest.mock('services/categories');

describe('Testing Home page', () => {
  test('should render with categories', async () => {
    render(<Home />);
    const categories = await screen.findAllByTestId('home-categorias');

    expect(categories).toHaveLength(2);
  })
})