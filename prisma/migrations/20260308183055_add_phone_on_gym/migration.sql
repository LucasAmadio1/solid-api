/*
  Warnings:

  - Added the required column `phone` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."gyms" ADD COLUMN     "phone" TEXT NOT NULL;
