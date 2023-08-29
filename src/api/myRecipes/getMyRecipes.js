import axios from 'axios';

export const getMyRecipes = async () => {
  const res = await axios.get(`/own`);

  return res.data;
};
