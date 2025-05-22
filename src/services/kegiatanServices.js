
import api from './api';

export const getPegawaiKegiatan = async ({ wilayah, bulan, tahun }) => {
    const res = await api.get('/kegiatan', {
      params: {
        wilayah,
        bulan,
        tahun,
      },
    });
    return res.data;
  };
  

export const getKegDeskripsiPegawai = async (nip,tanggal) => {
    const res = await api.get ('/kegiatan/deskripsi',{
        params: {
            nip: nip,
            tanggal: tanggal,
          },
    })
 
    return res.data

}

export const getPegawaiKegiatanKabKo = async (wilayah) => {
    const res = await api.get ('/kegiatan/kabko',{
        params: {
            wilayah: wilayah,
          },
    })
 
    return res.data

}
