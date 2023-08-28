import axios from 'axios';

export const getMyRecipes = async id => {
  const res = await axios.get(`/users/${id}`);

  return res.data;
};
