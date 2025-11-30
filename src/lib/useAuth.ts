import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { axiosApi } from "./axiosApi";
import { useCookies } from "react-cookie";

export default function useAuth() {
  const [cookies, , removeCookies] = useCookies(["token"]);
  const token = cookies.token;

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const requestInterceptor = axiosApi.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          removeCookies("token");
          navigate("/login", { replace: true });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosApi.interceptors.request.eject(requestInterceptor);
      axiosApi.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, token, removeCookies]);

  return {
    isAuthed: !!token,
  };
}
