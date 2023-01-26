import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { request } from 'http';

export const loadMyInfo = createAsyncThunk('GET/LOAD_MY_INFO_REQUEST', async (request: UserState) => {
  const promise = await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve(request);
    }, 3000);
  });

  return promise;
});

interface UserState {
  // type
  id: String | null;
  name: String | null;
  phone: String | null;
}

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
  extraReducers: {
    [loadMyInfo.fulfilled.type]: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
