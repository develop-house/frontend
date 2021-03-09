import axios from 'axios';

export const getEvent = async () => {
  const response = await axios.get('http://localhost:4000/event');
  return response.data;
};

export const getRoom = async () => {
  const response = await axios.get(`http://localhost:4000/room`);
  return response.data;
};
