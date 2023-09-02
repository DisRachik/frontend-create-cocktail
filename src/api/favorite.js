import axios from 'axios';

export const getFavorites = async () => {
  const res = await axios.get(`/favorite`);

  return res.data;
};

export const deleteFavorites = async id => {
  const res = await axios.delete(`/favorite/${id}`);

  return res.data;
};

export const addToFavorites = async id => {
  const res = await axios.post(`/favorite/${id}`);

  return res.data;
};

export const updateFavoriteStatus = async id => {
  const res = await axios.patch(`/favorite/${id}`);

  return res.data;
};
