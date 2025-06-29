import api from "./api";

export const getMetabaseUrl = async () => {
  try {
    const res = await api.get("/dashboard/metabaseDashboard");
    return res.data.iframeUrl;
  } catch (err) {
    console.error("Gagal mengambil iframe Metabase:", err);
    throw err;
  }
};
