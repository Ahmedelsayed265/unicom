import axios, { type AxiosRequestConfig } from "axios";

export const axiosApi = axios.create({
  baseURL: "https://unicom.devalm.com/api/",
  headers: {
    "Content-Type": "application/json",
    "lang": "ar"
  },
});

axiosApi.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("i18nextLng") || "en";
    config.headers["lang"] = lang;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.get<T>(url, config);
  return res.data;
};

export const postRequest = async <T>(
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.post<T>(url, data, config);
  return res.data;
};

export const putRequest = async <T>(
  url: string,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.put<T>(url, data, config);
  return res.data;
};

export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await axiosApi.delete<T>(url, config);
  return res.data;
};
