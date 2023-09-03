// Libs
import axios from 'axios';

export const getPopularRecipes = async () => {
  const { data } = await axios.get(`/recipes/popular`);
  return data;
};