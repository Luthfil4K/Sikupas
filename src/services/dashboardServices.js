import api from './api';


export const getAllSKP = async () => {
    const res = await api.get('/skp');
    return res.data;
  };
  