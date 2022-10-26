import { configureStore } from '@reduxjs/toolkit';
import tokenLogger from '../data-api/tokenLogger';
import userSlice from '../redux/UserSlice';

const rootReducer = {
  user: userSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });
store.dispatch(tokenLogger());

export default store;
