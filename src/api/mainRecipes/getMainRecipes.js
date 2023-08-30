import axios from 'axios';

export const getMainRecipes = async () => {
  const res = await axios.get(`/main`);

  return res.data;
};
