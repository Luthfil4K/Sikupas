import {
    Document,
    Page,
    View,
    Text,
    PDFViewer,
    Font,
    StyleSheet,
  } from "@react-pdf/renderer";
  
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
  
  export const styUD = StyleSheet.create({
    paperBg: { display: "flex", alignItems: "center", justifyContent: "center" },
  
    // boxIdentitas: { border: "1px solid black", width: "450px", height: "100px",marginBottom:10 },
    boxIdentitas: { width: "450px", height: "100px", marginBottom: 10 },
    formIdentitas: { display: "flex", flexDirection: "row" },
    baganKiri: { width: "100px" },
    fontIdentitas: { fontSize: "11px", marginBottom: "8px" },
    lampiranStlud: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  
    boxTahun: {
      width: "470px",
      display: "flex",
      alignItems: "end",
      justifyContent: "flex-end",
      flexDirection: "row",
    },
  
    boxNilai: {
      width: "470px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    fontNilai: {
      fontSize: "16px",
      marginBottom: "4px",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  
    boxTable: {
      borderTop: "1px solid black",
      width: "500px",
      height: "430px",
      marginBottom: "15px",
    },
    barisHeader: {
      height: "50px",
      borderBottom: "1px solid black",
      display: "flex",
      flexDirection: "row",
    },
    fontHeader: {
      fontSize: "10px",
      textAlign: "center",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    fontTerbilang: { fontSize: "8px", textAlign: "center" },
    fontBaris: { fontSize: "10px" },
    fontTtd: { fontSize: "10px",textAlign:'center' },
    needBold: {
      fontWeight: "bold",
      fontFamily: "Roboto",
    },
    kolNo: {
      width: "30px",
      alignItems: "center",
      justifyContent: "center",
      borderLeft: "1px solid black",
    },
    kolMateri: {
      borderLeft: "1px solid black",
      display: "flex",
      justifyContent: "center",
      width: "190px",
    },
    kolNilai: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "140px",
      flexDirection: "column",
    },
    KolNilaiAtas: {
      alignItems: "center",
      justifyContent: "center",
      width: "140px",
      height: "20px",
      borderBottom: "1px solid black",
      borderLeft: "1px solid black",
    },
    kolNilaiBawah: {
      alignItems: "end",
      justifyContent: "flex-end",
      width: "140px",
      display: "flex",
      flexDirection: "row",
      height: "30px",
    },
  
    kolPresentasi: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "70px",
      height: "100%",
      borderLeft: "1px solid black",
    },
    kolTertimbang: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "70px",
      height: "100%",
      borderLeft: "1px solid black",
    },
  
    kolTerbilang: {
      borderLeft: "1px solid black",
      borderRight: "1px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "140px",
    },
  
    barisSatu: {
      height: "80px",
      display: "flex",
      flexDirection: "row",
    },
  
    barisKelompokA: {},
  
    kolNilaiIsi: {
      alignItems: "end",
      justifyContent: "flex-end",
      width: "140px",
      display: "flex",
      flexDirection: "row",
      height: "100%",
    },
    barisNoKolom: {
      height: "15px",
      display: "flex",
      flexDirection: "row",
    },
  
    barisSatu: {
      height: "80px",
      display: "flex",
      flexDirection: "row",
    },
    
  
    kelompokA: {
      height: "100%",
      width: "470px",
    },
  
    a1: {
      height: "40px",
      borderBottom: "1px solid black",
      display: "flex",
      flexDirection: "row",
    },
  
    barisStandard: {
      borderBottom: "1px solid black",
      display: "flex",
      flexDirection: "row",
      height: "20px",
    },
    needBB: {
      borderBottom: "1px solid black",
    },
    needBL: {
      borderBottom: "1px solid black",
    },
    needBR: {
      borderBottom: "1px solid black",
    },
    needBT: {
      borderBottom: "1px solid black",
    },
  
    needPL: {
      paddingLeft: "5px",
    },
    needMiddle:{
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center"
    },
    needMorePL: {
      paddingLeft: "14px",
    },
  
    barisDua: {
      height: "60px",
      display: "flex",
      flexDirection: "row",
    },
    barisTiga: {
      height: "40px",
      display: "flex",
      flexDirection: "row",
    },
    barisEmpat: {
      height: "120px",
      display: "flex",
      flexDirection: "row",
    },
    d1: {
      height: "60px",
      borderBottom: "1px solid black",
      display: "flex",
      flexDirection: "row",
    },
    d2: {
      borderBottom: "1px solid black",
      display: "flex",
      flexDirection: "row",
      height: "60px",
    },
    barisLima: {
      height: "60px",
      display: "flex",
      flexDirection: "row",
    },
    barisJumlah: {
      display: "flex",
      flexDirection: "row",
      height: "20px",
    },
  
    kelJumlah: {
      width: "500px",
      height: "20px",
    },
    kolJumlah: {
      height: "20px",
      width: "220px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderLeft: "1px solid black",
    },
    boxTtd: {
      border: "1px solid black",
      width: "500px",
      height: "100px",
      alignItems: "flex-end",
    },
  
    boxTtd2: {
      border: "1px solid black",
      width: "200px",
      height: "100px",
      alignItems: "flex-end",
    },
    jabatanTtd:{
      
      width: "200px",
      alignItems:"center"
    },
    ttd:{
      height:"50px"
    }
  });