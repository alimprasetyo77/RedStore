import axios from "axios";

let USER_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDU5NTA2OTEsInVzZXJJZCI6M30.Mnkl81iwG2kyFClQwjpUJpNf6b6Uzh__K5C0oLuz0HU";

const ADMIN_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDU5NDkwMDYsInVzZXJJZCI6NX0.oIl1z33jhvdkjekRdfodgApV4oYcnH_sPQFj9V_-Jbo";
const axiosWithConfig = axios.create();
const axiosWithConfigAdmin = axios.create();

export const setAxiosConfig = (token: string) => {
  USER_JWT_TOKEN = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${USER_JWT_TOKEN}`;

  return axiosConfig;
});

axiosWithConfigAdmin.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${ADMIN_JWT_TOKEN}`;

  return axiosConfig;
});
export default axiosWithConfig;
