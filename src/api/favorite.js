import axios from 'axios';

export const getFavorites = async id => {
  const res = await axios.get(`/favorites/${id}`);

  return res.data;
};
