import axios from 'axios';

const BASE_URL = 'https://6474e9d27de100807b1bf198.mockapi.io/adverts';

export const getAllCars = async () => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
};

export const getPageCars = async page => {
  const { data } = await axios.get(`${BASE_URL}?page=${page}&limit=8`);
  return data;
};

export const getById = async id => {
  const { data } = await axios.get(`${BASE_URL}?id=${id}`);
  return data;
};

export const getFilteredCars  = async filter => {
  const { data } = await axios.get(`${BASE_URL}?filter=${filter}`);
  return data;
};
