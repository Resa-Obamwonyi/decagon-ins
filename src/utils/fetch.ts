import axios from 'axios';

const publicFetch = axios.create({
  baseURL: 'https://recruitment-decagon-api.herokuapp.com/api/v1',
});

export { publicFetch };
