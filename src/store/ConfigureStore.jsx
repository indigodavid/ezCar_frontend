import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tokenLogger from '../data-api/tokenLogger';
import userSlice from '../redux/UserSlice';
import carSlice from '../redux/CarSlice';
// import getCars from '../data-api/getCars';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  cars: carSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });
store.dispatch(tokenLogger());

// store.dispatch(getCars());

export default store;
