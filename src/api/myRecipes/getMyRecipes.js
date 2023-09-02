import axios from 'axios';

export const getMyRecipes = async () => {
  const res = await axios.get(`/own`);
  console.log(res.data);

  return res.data;
};
