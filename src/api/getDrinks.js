import axios from 'axios';

export const getDrinks = async query => {
  const { data } = await axios.get('/search', {
    params: {
      category: query,
    },
  });

  return data;
};
