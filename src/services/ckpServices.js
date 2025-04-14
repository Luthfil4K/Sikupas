
import api from './api';

export const getAllCkp = async () => {
  const res = await api.get('/ckp');
  return res.data;
};
