/*
  Warnings:

  - Added the required column `CNPJProvider` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionProvider` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idProvider` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `CNPJProvider` VARCHAR(191) NOT NULL,
    ADD COLUMN `descriptionProvider` VARCHAR(191) NOT NULL,
    ADD COLUMN `idProvider` VARCHAR(191) NOT NULL;
