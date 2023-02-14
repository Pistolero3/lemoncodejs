import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;
const url2 = `${process.env.BASE_API_URL}/transfer`;

export const getAccount = () =>
  Axios.get(url).then((response) => response.data);

export const sendTransfer = (transfer) =>
  Axios.post(url2, transfer).then((response) => response.data);
