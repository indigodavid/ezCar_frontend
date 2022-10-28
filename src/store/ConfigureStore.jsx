import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tokenLogger from '../data-api/tokenLogger';
import userSlice from '../redux/UserSlice';
import carSlice from '../redux/CarSlice';
import getCars from '../data-api/getCars';

const rootReducer = combineReducers({
  user: userSlice,
  cars: carSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.dispatch(tokenLogger());
store.dispatch(getCars());

export default store;
