import axios from 'axios';

const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_PROD_BASE_URL,
});

export { publicFetch };
