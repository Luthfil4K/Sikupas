/*
  Warnings:

  - The primary key for the `pegawai` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `pegawai` table. All the data in the column will be lost.
  - You are about to drop the `timkerjapegawai` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `skp_skp` DROP FOREIGN KEY `skp_skp_pegawai_nip_fkey`;

-- DropForeignKey
ALTER TABLE `timkerjapegawai` DROP FOREIGN KEY `TimKerjaPegawai_timKerjaId_fkey`;

-- DropForeignKey
ALTER TABLE `timkerjapegawai` DROP FOREIGN KEY `TimKerjaPegawai_userId_fkey`;

-- DropIndex
DROP INDEX `skp_skp_pegawai_nip_fkey` ON `skp_skp`;

-- AlterTable
ALTER TABLE `pegawai` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `nip` CHAR(64) NOT NULL,
    ADD PRIMARY KEY (`nip`);

-- AlterTable
ALTER TABLE `skp_skp` MODIFY `pegawai_nip` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_timkerja` MODIFY `tk_nip` VARCHAR(64) NOT NULL;

-- DropTable
DROP TABLE `timkerjapegawai`;

-- AddForeignKey
ALTER TABLE `tbl_timkerja` ADD CONSTRAINT `tbl_timkerja_tk_nip_fkey` FOREIGN KEY (`tk_nip`) REFERENCES `pegawai`(`nip`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skp_skp` ADD CONSTRAINT `skp_skp_pegawai_nip_fkey` FOREIGN KEY (`pegawai_nip`) REFERENCES `pegawai`(`nip`) ON DELETE RESTRICT ON UPDATE CASCADE;
