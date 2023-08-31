import axios from 'axios';

export const getFavorites = async (page = 1, limit = 3) => {
  const res = await axios.get(`/favorite?page=${page}&limit=${limit}`);

  return res.data;
};

export const updateFavoriteStatus = async id => {
  const res = await axios.patch(`/favorite/${id}`);

  return res.data;
};
