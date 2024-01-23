import axios from "axios";

let USER_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDU5ODA0NDYsInVzZXJJZCI6OH0.Nqc3_aPlGcf5en-5ptcrGHkdEVvcXMP30Pzt3GZO90M";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string) => {
  USER_JWT_TOKEN = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${USER_JWT_TOKEN}`;

  return axiosConfig;
});

export default axiosWithConfig;
