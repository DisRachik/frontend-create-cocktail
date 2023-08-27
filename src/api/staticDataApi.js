// Libs
import axios from 'axios';

export const getCategories = async () => {
  const { data } = await axios.get('/categories');
  return data;
};

export const getGlasses = async () => {
  const { data } = await axios.get('/glasses');
  return data;
};

export const getIngredients = async () => {
  const { data } = await axios.get('/ingredients');
  return data;
};
