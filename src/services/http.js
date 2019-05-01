import axios from 'axios';

const ENDPOINT = 'https://opentdb.com/';

axios.interceptors.request.use(
  config => ({ ...config, url: ENDPOINT + config.url }),
  error => Promise.reject(error),
);
