import Axios from 'axios';

const urlProvinces = `${process.env.BASE_API_URL}/provinces`;
const urlSaleTypes = `${process.env.BASE_API_URL}/saleTypes`;
const urlEquipment = `${process.env.BASE_API_URL}/equipments`;
const urlProperties = `${process.env.BASE_API_URL}/properties`;

export const getProvinces = () =>
  Axios.get(urlProvinces).then((response) => response.data);

export const getSaleTypes = () =>
  Axios.get(urlSaleTypes).then((response) => response.data);

export const getEquipments = () =>
  Axios.get(urlEquipment).then((response) => response.data);

export const sendProperty = (apiProperty) =>
  Axios.post(urlProperties, apiProperty).then((response) => response.data);
