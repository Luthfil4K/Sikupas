
import api from './api';

export const getAllTimKerja = async () => {
  const res = await api.get('/timkerja/timKerjaApi');
  return res.data;
};

export const getTimKerjaKetua = async (nip) => {
  const response = await api.get(`/timkerja/timKerjaKetua`, {
    params: { id: nip },
  });
  return response.data;
};

export const getTimKerjaKabko = async (wilayah) => {
  const response = await api.get(`/timkerja/kabko`, {
    params: { wilayah },
  });
  return response.data;
};
