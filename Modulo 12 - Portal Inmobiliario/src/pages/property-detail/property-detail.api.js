import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const url2 = `${process.env.BASE_API_URL}/equipments`;
const url3 = `${process.env.BASE_API_URL}/contact`;

export const getPropertyDetails = (id) =>
  Axios.get(`${url}/${id}`).then((response) => response.data);

export const getEquipments = () =>
  Axios.get(url2).then((response) => response.data);

export const sendContact = (contact) =>
  Axios.post(url3, contact).then((response) => response.data);
