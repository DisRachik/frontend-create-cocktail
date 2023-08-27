import axios from 'axios';

export const getFavorites = async id => {
  const res = await axios.get(`/users/${id}`);

  return res.data;
};
