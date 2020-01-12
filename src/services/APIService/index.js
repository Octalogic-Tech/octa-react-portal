import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchPortfolio = payload => {
  const url = "/portfolio/" + payload.key;
  return axiosInstance({
    method: "GET",
    url: url,
  });
};

export const fetchClientInfo = payload => {
  const url = "https://ipapi.co/json/";
  return axios.get(url);
};

export const sendClientInfo = payload => {
  const url = "/banana/" + payload.key;
  return axiosInstance({
    method: "POST",
    url: url,
    data: payload,
  });
};
