import axios from 'axios';




const api = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_LUTHFIL_DEV,
  // baseURL: "http://localhost:3000/api",
  // baseURL: 'https://api.statsbali.id/ekia/api',
  withCredentials: true, 
});

export default api;
