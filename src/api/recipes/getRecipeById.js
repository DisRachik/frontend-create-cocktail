import axios from 'axios';

export const getRecipeById = async id => {
  const res = await axios.get(`/recipes/${id}`);
  return res.data;
};
