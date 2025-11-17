import axios from 'axios';

export const api1 = axios.create({
  baseURL: 'https://1kod-az-api.vercel.app/api',
});

export const api2 = axios.create({
  baseURL: 'https://consultaion-api.vercel.app',
});