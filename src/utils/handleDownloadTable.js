
import templateUjianDinas from '../data/dataColUD'
import templatePenyesuaianIjazah from '../data/dataColPI'
import xlsx from 'json-as-xlsx'
import dataRowPI from "../data/dataRowPI";
import dataRowUD from "../data/dataRowUD";


export const handleDownloadTable = (kegiatan) => {
    const dataKolom = kegiatan=='ujianDinas' ?  templateUjianDinas.map(kol => ({
      label: kol.field,
      value: kol.field
    })) 
    : 
    templatePenyesuaianIjazah.map(kol => ({
        label: kol.field,
        value: kol.field
    }))

    dataKolom.unshift({ label: 'id', value: 'id' })

    let dataDownload = [
      {
        sheet: 'sheetone',
        columns: dataKolom,
        content: kegiatan =="ujianDinas" ? dataRowUD : dataRowPI
      }
    ]

    let settings = {
      fileName: 'template_table_' ,
      extraLength: 3,
      writeMode: 'writeFile',
      writeOptions: {},
      RTL: false
    }

    xlsx(dataDownload, settings)
  }
