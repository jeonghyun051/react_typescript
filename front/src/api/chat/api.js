import axios from 'axios';

export const getChat = async (request) => {
  const { data } = await axios.post('http://localhost:8080/chat', request);
  return data;
};
