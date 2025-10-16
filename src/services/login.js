// services/login.js
import api from './api';

export const login = async (username, password) => {
  const res = await api.post('/auth', { username, password });
  return res.data;
};
