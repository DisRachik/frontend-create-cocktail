import axios from 'axios';

export const getAllDrinks = async () => {
  const res = await axios.get(`/recipes/main-page`);

  return res.data;
};
