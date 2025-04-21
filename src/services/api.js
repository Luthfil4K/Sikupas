import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.statsbali.id/ekia/api',
  // withCredentials: true, // ✅ Tambahkan ini
});

export default api;
