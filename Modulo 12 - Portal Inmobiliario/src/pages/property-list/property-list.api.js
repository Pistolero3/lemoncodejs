import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const url2 = `${process.env.BASE_API_URL}/saleTypes`;
const url3 = `${process.env.BASE_API_URL}/provinces`;

export const getProperties = (queryParams) =>
  Axios.get(`${url}?${queryParams}`).then((response) => response.data);

export const getSaleTypes = () =>
  Axios.get(url2).then((response) => response.data);

export const getProvinces = () =>
  Axios.get(url3).then((response) => response.data);
