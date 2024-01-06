import mockCategories from '../../mocks/categories';

const categoriesService = {
  search: () => mockCategories,
  searchOneCategory: () => mockCategories[0],
}

export default categoriesService;