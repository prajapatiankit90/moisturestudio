import axios from "axios";
import config from "./config";

const axiosApi = axios.create({
  baseURL: config.API_URL,
});

export const setAuthHeader = (token) => {
  axiosApi.defaults.headers.common.Authorization =
    token || localStorage.getItem("token");
};

axiosApi.defaults.headers.common.Authorization = localStorage.getItem("token");

// If Unauthorized Person then Remove token
axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if ((error && error.response && error.response.status === 401) || (error.response.status === 409) ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

setAuthHeader(localStorage.getItem("token"));

export default axiosApi;
