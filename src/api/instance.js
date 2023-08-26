// Libs
import axios from 'axios';
// ENV
// const { API_URL } = process.env;

export const instance = axios.create({
  baseURL: 'http://localhost:3030/api',
});
