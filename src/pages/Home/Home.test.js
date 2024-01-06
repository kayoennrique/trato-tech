import { routeAdvertise, routeCategorie } from '../../routes';
import Home from '.';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import mockCategories from '../../mocks/categories';

jest.mock('services/categories');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testing Home page', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe('Advertise', () => {
    it('It should redirect to the advertise page', () => {
      render(<Home />);
      const buttonAdvertise = screen.getByTestId('home-botao-anunciar');

      userEvent.click(buttonAdvertise);

      expect(mockNavigate).toHaveBeenCalledWith(`/${routeAdvertise}`);
    });
  });

  describe('Categorias', () => {
    it('Must render with categories', async () => {
      render(<Home />);
      const categories = await screen.findAllByTestId('home-categorias');
  
      expect(categories).toHaveLength(2);
    });
    
    it('Should redirect to the category id', async () => {
      render(<Home />);
      const categories = await screen.findAllByTestId('home-categorias');

      const firstCategorie = categories[0];

      userEvent.click(firstCategorie);

      expect(mockNavigate).toHaveBeenCalledWith(`/${routeCategorie}/${mockCategories[0].id}`);
    });
  });

});