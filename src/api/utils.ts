import axios, { AxiosRequestConfig } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export const request = (params: AxiosRequestConfig) => {
  return axiosInstance({
    ...params,
  });
};

axiosInstance.interceptors.request.use((config) => {
  // console.log("TEST_INTERCEPTOR", config);

  return config;
});
