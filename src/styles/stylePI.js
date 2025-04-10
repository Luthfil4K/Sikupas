// styles.js
import { StyleSheet,Font } from "@react-pdf/renderer";
import FontRobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import FontRobotoItalic from "../assets/fonts/Roboto/Roboto-Italic.ttf";
import FontRobotoBoldItalic from "../assets/fonts/Roboto/Roboto-BoldItalic.ttf";
import FontRobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";

Font.register({
  family: "Roboto", // Nama font keluarga
  fonts: [
    {
      src: FontRobotoRegular,
    },
    {
      src: FontRobotoBoldItalic,
      fontWeight: "bold",
      fontStyle: "italic",
    },
    {
      src: FontRobotoItalic,
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: FontRobotoBold,
      fontWeight: "bold",
    },
  ],
});
export const styles = StyleSheet.create({
    // fontFamily:'Roboto'
  
    page: {
      position: "relative", // Membuat elemen menjadi relatif agar gambar bisa ditempatkan di atasnya
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: "100%",
    },
    backgroundImage: {
      position: "absolute", // Menempatkan gambar di belakang semua elemen lainnya
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      objectFit: "cover",
      zIndex: 10, // Menjaga proporsi gambar agar menutupi seluruh halaman
    },
    layout: {
      paddingTop: 220,
      paddingHorizontal: 100,
      flexGrow: 1,
    },
    kop: {
      width: "100%",
      height: 60,
      alignItems: "center",
      marginBottom: 10,
      bps: {
        fontSize: 12,
        marginBottom: 10,
        fontWeight: "bold",
        fontStyle: "italic",
        fontFamily: "Roboto",
      },
      namaSurat: {
        fontSize: 12,
        marginBottom: 10,
        fontWeight: "bold",
        // fontStyle: 'italic',
        fontFamily: "Roboto",
      },
      nomorSurat: {
        fontSize: 12,
      },
    },
    isi: {
      width: "100%",
      height: 40,
      marginBottom: 20,
      isiSurat: {
        fontSize: 12,
      },
    },
    keteranganIsi: {
      width: "100%",
      height: 100,
      marginBottom: 10,
      display: "flex",
      flexDirection: "row",
      isiKiri: {
        width: "35%",
        height: 100,
      },
      isiKanan: {
        width: "66%",
        height: 100,
      },
      formatIdentitas: {
        marginBottom: 4,
        fontSize: 12,
      },
    },
    keteranganLulus: {
      width: "100%",
      height: 30,
      marginBottom: 10,
      alignItems: "center",
      lulusText: {
        fontSize: 20,
        fontWeight: "bold",
        // fontStyle: 'italic',
        fontFamily: "Roboto",
      },
    },
    penutup: {
      width: "100%",
      height: 30,
      marginBottom: 20,
      penutupText: {
        fontSize: 12,
      },
    },
    fotoTtd: {
      width: "100%",
      height: 120,
      display: "flex",
      flexDirection: "row",
      isiKiri: {
        paddingLeft: 50,
        width: "36%",
        height: 120,
        layoutFoto: {
          width: 90,
          height: 120,
          border: "3px black",
        },
      },
      stempel: {
        marginLeft: 120,
        position: "absolute",
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center",
        layoutFoto: {
          width: 100,
          height: 100,
        },
      },
      ttd: {
        justifyContent: "center",
        marginLeft: 180,
        position: "absolute",
        alignItems: "center",
        layoutFoto: {
          width: 100,
          height: 100,
        },
      },
      isiKanan: {
        width: "80%",
        height: 120,
        alamat: {
          alignItems: "center",
          height: 50,
        },
        ttd: {
          height: 60,
          layoutFoto: {
            width: 90,
            height: 90,
          },
        },
        namaTtd: {
          height: 30,
          alignItems: "center",
          layoutFoto: {
            width: 90,
            height: 90,
          },
        },
        normalText: {
          fontSize: 12,
        },
      },
    },
    normalText: {
      fontSize: 11,
    },
  });
