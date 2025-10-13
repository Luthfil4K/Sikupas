
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

export const getPegawaiKabko = async (wilayah) => {
   const response = await api.get(`/pegawai/kabko`, {
      params: { wilayah:wilayah },
    });
    return response.data;
};


export const getRekapSKP = async (nip) => {
  const response = await api.get('/skp/rekap',{
    params : {nip}
  })

  return response.data
}

export const getAllStatus = async(filterRegion)  => {
  const response = await api.get('/pegawai/status',{
    params:{filterRegion}
  })

  return response.data
}

export const changePegawaiStatusById = async (id,field,value) => {
  console.log(id,field,value)
  const response = await api.post('/pegawai/status',{
    id,
    field,
    value
  }, {
    headers: { "Content-Type": "application/json" }
  })
  return response.data
}

