import { createSlice } from '@reduxjs/toolkit';
import logInUser from '../data-api/logInUser';
import logOutUser from '../data-api/logOutUser';
import signUpUser from '../data-api/signUpUser';
import tokenLogger from '../data-api/tokenLogger';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logInUser.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      user: action.payload,
    }));
    builder.addCase(logInUser.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(logInUser.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(logOutUser.fulfilled, (state, action) => ({
      ...state,
      status: action.message,
      user: {},
    }));
    builder.addCase(signUpUser.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      user: action.payload,
    }));
    builder.addCase(tokenLogger.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      user: action.payload,
    }));
    builder.addCase(tokenLogger.rejected, (state) => ({
      ...state,
      status: 'failed token authentication',
    }));
  },
});

export const logInUserRedux = userSlice.actions;
export default userSlice;
