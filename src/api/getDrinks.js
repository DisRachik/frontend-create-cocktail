import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

setAuthHeader(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWQ4ZDhjMDc4NThkYjE1YzlkZTBkMCIsImlhdCI6MTY5MzI5MDA1MCwiZXhwIjoxNjkzMzcyODUwfQ.9O3C9s0RgKbG5hj_M7OoVUiaXgCxs7Y-OIxoeAQtMts'
);

export const getDrinksByQuery = async (search, categories, ingridients) => {
  // if (search && categories && ingridients) {
  //   const res = await axios.get('/search', {
  //     params: {
  //       search,
  //       categories,
  //     },
  //   });
  //   return res.data;
  // } else if (search && categories) {
  //   const res = await axios.get('/search', {
  //     params: {
  //       search,
  //       categories,
  //       ingridients,
  //     },
  //   });
  //   return res.data;
  // } else if (search && ingridients) {
  //   const res = await axios.get('/search', {
  //     params: {
  //       search,
  //       ingridients,
  //     },
  //   });
  //   return res.data;
  // } else if (categories && ingridients) {
  //   const res = await axios.get('/search', {
  //     params: {
  //       categories,
  //       ingridients,
  //     },
  //   });
  //   return res.data;
  // } else if (search) {
  //   const res = await axios.get('/search', {
  //     params: {
  //       search,
  //     },
  //   });
  //   return res.data;
  // } else if (categories) {
  //   const res = await axios.get('/search', {
  //     params: {
  //       categories,
  //     },
  //   });
  //   return res.data;
  // } else if (ingridients) {
  //   const res = await axios.get('/search', {
  //     params: {
  //       ingridients,
  //     },
  //   });
  //   return res.data;
  // }
};
