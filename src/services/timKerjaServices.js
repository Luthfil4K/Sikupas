
import api from './api';

export const getAllTimKerja = async () => {
  const res = await api.get('/timkerja/timKerjaApi');
  return res.data;
};
