
import api from './api';

export const getAllTimKerja = async () => {
  const res = await api.get('/timkerja');
  return res.data;
};
