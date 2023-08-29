import axios from 'axios';

export const getFavorites = async id => {
  const res = await axios.get(`/favorites/${id}`);

  return res.data;
};

export const updateFavoriteStatus = async id => {
  const res = await axios.patch(`/favorite/${id}`);

  return res.data;
};
