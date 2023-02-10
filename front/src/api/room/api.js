import axios from 'axios';
const URL = 'http://localhost:8080';

export const getRooms = async () => {
  return await axios.get(`${URL}/rooms`);
};
