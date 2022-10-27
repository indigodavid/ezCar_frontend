import { createSlice } from '@reduxjs/toolkit';
import getCars from '../data-api/getCars';

const initialState = {
  status: 'idle',
  cars: [],
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: action.payload,
    }));
    builder.addCase(getCars.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getCars.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const carsRedux = carSlice.actions;
export default carSlice;
