import { routeAdvertise } from '../../routes';
import Home from '.';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';

jest.mock('services/categories');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('Testing Home page', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })
  describe('Advertise', () => {
    it('It should redirect to the advertise page', () => {
      render(<Home />);
      const buttonAdvertise = screen.getByTestId('home-botao-anunciar');

      userEvent.click(buttonAdvertise);

      expect(mockNavigate).toHaveBeenCalledWith(`/${routeAdvertise}`);
    })
  })

  describe('Categories', () => {
    it('Must render with categories', async () => {
      render(<Home />);
      const categories = await screen.findAllByTestId('home-categorias');
  
      expect(categories).toHaveLength(2);
    }) 
  })

})