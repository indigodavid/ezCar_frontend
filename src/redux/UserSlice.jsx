import { createSlice } from '@reduxjs/toolkit';
import logInUser from '../data-api/userLogIn';
import logOutUser from '../data-api/userLogOut';
import signUpUser from '../data-api/userSignUp';

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
  },
});

export const logInUserRedux = userSlice.actions;
export default userSlice;
