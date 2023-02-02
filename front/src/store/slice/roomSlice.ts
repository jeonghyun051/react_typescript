import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
  // type
  no: string | '';
  name: string | '';
}

const initialState: RoomState = {
  no: '',
  name: '',
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.no = action.payload.no;
      state.name = action.payload.name;
    },
  },
});

export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;
