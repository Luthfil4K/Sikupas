import api from './api';

export const getAllStatus = async () => {
  const res = await api.get(`/status`);
  return res.data;
};
