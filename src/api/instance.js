// Libs
import axios from 'axios';
// ENV
// const { API_URL } = process.env;

export const instance = axios.create({
  baseURL: 'http://lockalhost:3030/api',
});
