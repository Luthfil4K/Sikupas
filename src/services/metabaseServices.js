import api from "./api";

export const getMetabaseUrl = async (role, satker,jabatan) => {
  console.log(role + " : " + satker);
  try {
    const res = await api.get("/dashboard/metabaseDashboard", {
      params : {role,satker,jabatan}
    })

    return res.data.iframeUrl;
  } catch (err) {
    console.error("Gagal mengambil iframe Metabase:", err);
    throw err;
  }
};
