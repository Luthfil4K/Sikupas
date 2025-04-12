-- CreateTable
CREATE TABLE `tbl_tim` (
    `tim_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tim_nama` TEXT NOT NULL,

    PRIMARY KEY (`tim_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_timkerja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tk_nip` INTEGER NOT NULL,
    `tk_tim` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skp_skp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sasaran_kinerja` TEXT NOT NULL,
    `indikator` TEXT NOT NULL,
    `realisasi` TEXT NOT NULL,
    `umpan_balik` TEXT NOT NULL,
    `bulan` VARCHAR(64) NOT NULL,
    `tahun` INTEGER NOT NULL,
    `jenis` TEXT NOT NULL,
    `pegawai_nama` TEXT NOT NULL,
    `pegawai_nip` INTEGER NOT NULL,
    `pegawai_gol` VARCHAR(64) NOT NULL,
    `pegawai_jabatan` TEXT NOT NULL,
    `pegawai_unit` VARCHAR(64) NOT NULL,
    `pejabat_nama` TEXT NOT NULL,
    `pejabat_nip` INTEGER NOT NULL,
    `pejabat_gol` VARCHAR(64) NOT NULL,
    `pejabat_jabatan` VARCHAR(64) NOT NULL,
    `pejabat_unit` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skp_uploadedfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file` TEXT NOT NULL,
    `uploaded_at` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pegawai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nip` TEXT NOT NULL,
    `nama` TEXT NOT NULL,
    `jabatan` VARCHAR(64) NOT NULL,
    `wilayah` VARCHAR(64) NOT NULL,
    `golongan` VARCHAR(64) NOT NULL,
    `tmt` VARCHAR(64) NOT NULL,
    `status` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TimKerjaPegawai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `timKerjaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TimKerjaPegawai` ADD CONSTRAINT `TimKerjaPegawai_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `pegawai`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimKerjaPegawai` ADD CONSTRAINT `TimKerjaPegawai_timKerjaId_fkey` FOREIGN KEY (`timKerjaId`) REFERENCES `tbl_timkerja`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
