/*
  Warnings:

  - You are about to drop the column `Role` on the `Benutzer` table. All the data in the column will be lost.
  - Added the required column `Rolle` to the `Benutzer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Rolle" AS ENUM ('ADMIN', 'BETRIEB', 'LERNENDER');

-- AlterTable
ALTER TABLE "Benutzer" DROP COLUMN "Role",
ADD COLUMN     "Rolle" "Rolle" NOT NULL;

-- DropEnum
DROP TYPE "Role";
