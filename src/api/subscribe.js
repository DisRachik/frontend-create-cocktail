import axios from 'axios';

export const subscripe = async email => {
  const { data } = await axios.post('/subscribe', email);

  return data;
};

export const unsubscribe = async () => {
  const { data } = await axios.delete('/subscribe');
  return data;
};
