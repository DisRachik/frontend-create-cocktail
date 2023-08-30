// Libs
import axios from 'axios';

export const getIngredients = async () => {
  const { data } = await axios.get('/ingredients');
  return data;
};
