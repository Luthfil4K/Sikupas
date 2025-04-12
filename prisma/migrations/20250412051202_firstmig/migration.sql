/*
  Warnings:

  - The primary key for the `tbl_tim` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `tbl_tim` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_tim` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `tim_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `tbl_timkerja` ADD CONSTRAINT `tbl_timkerja_id_fkey` FOREIGN KEY (`id`) REFERENCES `tbl_tim`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skp_skp` ADD CONSTRAINT `skp_skp_pegawai_nip_fkey` FOREIGN KEY (`pegawai_nip`) REFERENCES `pegawai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
