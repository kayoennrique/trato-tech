import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, { payload }) => payload,
    resetSearch: () => initialState,
  }
});

export const { changeSearch, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;