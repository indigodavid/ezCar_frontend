import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tokenLogger from '../data-api/tokenLogger';
import userSlice from '../redux/UserSlice';
import carSlice from '../redux/CarSlice';
import ReservationSlice from '../redux/ReservationSlice';
import getCars from '../data-api/getCars';
import getReservations from '../data-api/getReservation';

const rootReducer = combineReducers({
  user: userSlice,
  cars: carSlice,
  reservation: ReservationSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.dispatch(tokenLogger());
store.dispatch(getCars());
store.dispatch(getReservations());

export default store;
