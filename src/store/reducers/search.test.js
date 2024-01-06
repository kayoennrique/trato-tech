import searchReducer, { changeSearch, resetSearch } from './search';

describe('Testing search reducer', () => {
  it('Should change search as expected', () => {
    expect(searchReducer('', changeSearch('teste'))).toEqual('teste')
  });
  it('Should reset fetch as expected', () => {
    expect(searchReducer('outro valor', resetSearch())).toEqual('');
  });
});
