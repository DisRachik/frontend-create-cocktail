// Libs
import axios from 'axios';

// !=============================================Temp code======================================================
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

setAuthHeader(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWIzYWMyYmJlMTNmNjZjY2MxNGQyZCIsImlhdCI6MTY5MzI0NDYxMCwiZXhwIjoxNjkzMzI3NDEwfQ.tH7wlHv-BLJojdrGmbss12N9GfTE7pz0EK8KccO9Ha0'
);
// !=============================================End of the temp code============================================

export const getGlasses = async () => {
  const { data } = await axios.get('/glasses');
  return data;
};
