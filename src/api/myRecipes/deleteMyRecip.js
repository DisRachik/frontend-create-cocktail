import axios from 'axios';

export const deleteMyRecip = async id => {
  const res = await axios.delete(`/own/${id}`);

  return res.data;
};
