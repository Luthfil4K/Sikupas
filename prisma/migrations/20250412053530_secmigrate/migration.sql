/*
  Warnings:

  - The primary key for the `tbl_tim` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `tbl_tim` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbl_timkerja` DROP FOREIGN KEY `tbl_timkerja_id_fkey`;

-- AlterTable
ALTER TABLE `tbl_tim` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `tim_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`tim_id`);

-- AddForeignKey
ALTER TABLE `tbl_timkerja` ADD CONSTRAINT `tbl_timkerja_tk_tim_fkey` FOREIGN KEY (`tk_tim`) REFERENCES `tbl_tim`(`tim_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
