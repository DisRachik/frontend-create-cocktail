// Libs
import axios from 'axios';

export const getGlasses = async () => {
  const { data } = await axios.get('/glasses');
  return data;
};
