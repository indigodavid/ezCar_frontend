import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, CARS } from './routes';

const getCars = createAsyncThunk('LOG_IN', async () => {
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    const response = await fetch(`${BASE_URL + CARS}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
    });
    const cars = await response.json();
    return cars;
  }
  return [];
});

export default getCars;
