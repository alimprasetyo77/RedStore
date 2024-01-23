import axios from "axios";

let USER_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDYwMTM0MDEsInVzZXJJZCI6OH0.T5J5S_wyH773ZKsRRQ33ViSCZPBjhLaZReXLQTOEngY";
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
