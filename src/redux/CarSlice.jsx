import { createSlice } from '@reduxjs/toolkit';
import getCars from '../data-api/getCars';
import createCars from '../data-api/createCars';
import deleteCars from '../data-api/deleteCars';

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
    builder.addCase(createCars.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: [...state.cars, action.payload],
    }));
    builder.addCase(createCars.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(createCars.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(deleteCars.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: state.cars.filter((car) => car.id !== action.payload.id),
    }));
    builder.addCase(deleteCars.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(deleteCars.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const carsRedux = carSlice.actions;
export default carSlice.reducer;
