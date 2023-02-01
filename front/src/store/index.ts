import { configureStore } from '@reduxjs/toolkit';
import roomSlice from './slice/roomSlice';
import userSlice from './slice/userSlice';

// Create a Redux Store
export const store = configureStore({
  reducer: {
    user: userSlice,
    room: roomSlice,
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
