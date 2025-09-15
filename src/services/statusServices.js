import api from './api';

export const getAllStatus = async () => {
  console.log("getAllStatuuussss")
  const res = await api.get(`/status`);
  return res.data;
};
