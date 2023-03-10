import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { request } from 'http';
import { User } from '../../types';
import { isLogin } from '../../util/utils';

export const loadMyInfo = createAsyncThunk('GET/LOAD_MY_INFO_REQUEST', async (request: UserState) => {
  const promise = await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve(request);
    }, 3000);
  });

  return promise;
});

interface UserState extends User {}

const initialState: UserState = {
  isLogin: isLogin(),
  no: 0,
  name: '',
  phone: '',
  username: '',
  roles: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLogin = isLogin();
      state.no = action.payload.no;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.username = action.payload.username;
      state.roles = action.payload.roles;
    },
    resetUser: (state, action) => {
      return { ...initialState };
    },
  },
  extraReducers: {
    [loadMyInfo.fulfilled.type]: (state, action) => {
      state.no = action.payload.no;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
