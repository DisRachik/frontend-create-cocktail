import axios from 'axios';

export const deleteMyRecipe = async _id => {
  const res = await axios.delete(`/own/${_id}`);

  return res.data;
};
