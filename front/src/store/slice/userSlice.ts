import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: String | null;
  name: String | null;
  phone: String | null;
}

// type State = {
//   id: String | null;
//   name: String | null;
//   phone: String | null;
// };

const initialState: UserState = {
  id: '',
  name: '',
  phone: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
