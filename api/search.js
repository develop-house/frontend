import axios from 'axios';

export const searchPeople = async () => {
  const response = await axios.get('http://localhost:4000/people');
  return response.data;
};

export const searchClub = async () => {
  const response = await axios.get(`http://localhost:4000/club`);
  return response.data;
};
