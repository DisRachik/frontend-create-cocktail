// Libs
import axios from 'axios';

// !=============================================Temp code======================================================
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

setAuthHeader(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWIzYWMyYmJlMTNmNjZjY2MxNGQyZCIsImlhdCI6MTY5MzEzNzg5MSwiZXhwIjoxNjkzMjIwNjkxfQ.c87yedKVnB4QFRk4eCWZSZt5rI2zxwwT9BQr3F0R-uI'
);
// !=============================================End of the temp code============================================

export const getCategories = async () => {
  const { data } = await axios.get('/categories');
  return data;
};
