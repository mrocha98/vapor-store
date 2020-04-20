import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3333',
});

export default api;
