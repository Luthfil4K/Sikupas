
import api from './api';

export const getAllPegawai = async () => {
  const res = await api.get('/pegawai');
  return res.data;
};


export const getPegawaiById = async (id) => {
  const res = await api.get(`/pegawai/${id}`);
  return res.data;
};

export const changePasswordPegawai = async ({ nip, oldPassword, newPassword }) => {
  console.log("api fe")
  return await api.post(`/pegawai/changePassword`, {
    nip,
    oldPassword,
    newPassword
  });
};
