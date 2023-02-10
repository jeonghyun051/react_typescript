import axios from 'axios';
const URL = 'http://localhost:8080';

export const login = async (request) => {
  return await axios.post(`${URL}/login`, request);
};

export const join = async (request) => {
  return await axios.post(`${URL}/join`, request);
};
