import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, CARS } from './routes';

const deleteCars = createAsyncThunk('cars/DELETE', async (carId) => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + CARS}/${carId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
    });
    const car = await response.json();
    return car;
  }
  return [];
});

export default deleteCars;
