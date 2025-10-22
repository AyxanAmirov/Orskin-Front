import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://1kod-az-api.vercel.app/api',
});