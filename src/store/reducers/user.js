import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'usuario',
    initialState: {},
    reducers: {
      addUser: (state, { payload }) => {
        return payload;
      }
    }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;