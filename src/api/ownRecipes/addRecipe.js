// Libs
import axios from 'axios';

export const addRecipe = async newRecipe => {
  const { data } = await axios.post('/own', newRecipe);
  return data;
};
