import axios from 'axios';
const URL = 'http://localhost:8080';

export const getChat = async (request) => {
  return await axios.post(`${URL}/chat`, request);
};
