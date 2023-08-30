import axios from 'axios';

export const getFavorites = async (page = 1, limit = 3) => {
  const res = await axios.get(`/favorites?page=${page}&limit=${limit}`);

  return res.data;
};
