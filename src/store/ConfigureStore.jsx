import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/UserSlice';

const rootReducer = {
  user: userSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
