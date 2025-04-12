
import api from './api';

export const getAllPegawai = async () => {
  const res = await api.get('/pegawai');
  return res.data;
};


export const getPegawaiById = async (id) => {
  const res = await api.get(`/pegawai/${id}`);
  return res.data;
};
