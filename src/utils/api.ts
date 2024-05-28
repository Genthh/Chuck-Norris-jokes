import axios, { AxiosInstance } from "axios";

const API_URL = process.env.API_URL;
const API_URL_KEY = process.env.API_URL_KEY;
const API_URL_HOST = process.env.API_URL_HOST;
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "X-RapidAPI-Key": API_URL_KEY,
    "X-RapidAPI-Host": API_URL_HOST,
  },
});

api.interceptors.request.use(
  async (config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
