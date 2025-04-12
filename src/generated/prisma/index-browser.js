
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Tbl_timScalarFieldEnum = {
  tim_id: 'tim_id',
  tim_nama: 'tim_nama'
};

exports.Prisma.Tbl_timkerjaScalarFieldEnum = {
  id: 'id',
  tk_nip: 'tk_nip',
  tk_tim: 'tk_tim'
};

exports.Prisma.Skp_skpScalarFieldEnum = {
  id: 'id',
  sasaran_kinerja: 'sasaran_kinerja',
  indikator: 'indikator',
  realisasi: 'realisasi',
  umpan_balik: 'umpan_balik',
  bulan: 'bulan',
  tahun: 'tahun',
  jenis: 'jenis',
  pegawai_nama: 'pegawai_nama',
  pegawai_nip: 'pegawai_nip',
  pegawai_gol: 'pegawai_gol',
  pegawai_jabatan: 'pegawai_jabatan',
  pegawai_unit: 'pegawai_unit',
  pejabat_nama: 'pejabat_nama',
  pejabat_nip: 'pejabat_nip',
  pejabat_gol: 'pejabat_gol',
  pejabat_jabatan: 'pejabat_jabatan',
  pejabat_unit: 'pejabat_unit'
};

exports.Prisma.Skp_uploadedfileScalarFieldEnum = {
  id: 'id',
  file: 'file',
  uploaded_at: 'uploaded_at'
};

exports.Prisma.PegawaiScalarFieldEnum = {
  id: 'id',
  nip: 'nip',
  nama: 'nama',
  jabatan: 'jabatan',
  wilayah: 'wilayah',
  golongan: 'golongan',
  tmt: 'tmt',
  status: 'status'
};

exports.Prisma.TimKerjaPegawaiScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  timKerjaId: 'timKerjaId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.tbl_timOrderByRelevanceFieldEnum = {
  tim_nama: 'tim_nama'
};

exports.Prisma.skp_skpOrderByRelevanceFieldEnum = {
  sasaran_kinerja: 'sasaran_kinerja',
  indikator: 'indikator',
  realisasi: 'realisasi',
  umpan_balik: 'umpan_balik',
  bulan: 'bulan',
  jenis: 'jenis',
  pegawai_nama: 'pegawai_nama',
  pegawai_gol: 'pegawai_gol',
  pegawai_jabatan: 'pegawai_jabatan',
  pegawai_unit: 'pegawai_unit',
  pejabat_nama: 'pejabat_nama',
  pejabat_gol: 'pejabat_gol',
  pejabat_jabatan: 'pejabat_jabatan',
  pejabat_unit: 'pejabat_unit'
};

exports.Prisma.skp_uploadedfileOrderByRelevanceFieldEnum = {
  file: 'file',
  uploaded_at: 'uploaded_at'
};

exports.Prisma.pegawaiOrderByRelevanceFieldEnum = {
  nip: 'nip',
  nama: 'nama',
  jabatan: 'jabatan',
  wilayah: 'wilayah',
  golongan: 'golongan',
  tmt: 'tmt',
  status: 'status'
};


exports.Prisma.ModelName = {
  tbl_tim: 'tbl_tim',
  tbl_timkerja: 'tbl_timkerja',
  skp_skp: 'skp_skp',
  skp_uploadedfile: 'skp_uploadedfile',
  pegawai: 'pegawai',
  TimKerjaPegawai: 'TimKerjaPegawai'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
