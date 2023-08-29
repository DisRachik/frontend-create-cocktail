// Libs
import axios from 'axios';

// !=============================================Temp code======================================================
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

setAuthHeader(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWQ4ZDhjMDc4NThkYjE1YzlkZTBkMCIsImlhdCI6MTY5MzI5MDA1MCwiZXhwIjoxNjkzMzcyODUwfQ.9O3C9s0RgKbG5hj_M7OoVUiaXgCxs7Y-OIxoeAQtMts'
);
// !=============================================End of the temp code============================================

export const getIngredients = async () => {
  const { data } = await axios.get('/ingredients');
  return data;
};
