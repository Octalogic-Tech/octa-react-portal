import axios from 'axios';
// https://us-central1-octalogic-portfolio-dev.cloudfunctions.net/api/v1/portfolio/{portfolioCode}
const axiosInstance = axios.create({
//   baseURL: process.env.BASE_API_URL,
  // baseURL: 'https://us-central1-octalogic-portfolio-dev.cloudfunctions.net/api/',
  baseURL: 'https://us-central1-octalogic-portfolio.cloudfunctions.net/api',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchPortfolio = (payload) => {
    const url = '/v1/portfolio/' + payload.key;
    return axiosInstance({
      method: 'GET',
      url: url,
    });
  };