import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, LOG_OUT } from './routes';

const logOutUser = createAsyncThunk('LOG_OUT', async (userinfo) => {
  const response = await fetch(`${BASE_URL + LOG_OUT}`, {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(userinfo),
  });
  localStorage.removeItem('token');
  const data = await response.json();
  return data;
});

export default logOutUser;
