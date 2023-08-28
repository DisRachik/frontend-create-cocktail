import axios from 'axios';

export const deleteMyRecipes = async id => {
  const res = await axios.get(`/${id}`);

  return res.data;
};
