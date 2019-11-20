import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: process.env.BASE_API_URL,
  baseURL: 'https://poof.io/',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchPortfolio = (payload) => {
    const url = '/v1/portfolio/' + payload.key;
    return axiosInstance({
      method: 'GET',
      url: url,
    });
  };