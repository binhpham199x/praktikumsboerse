-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'BETRIEB', 'LERNENDER');

-- CreateEnum
CREATE TYPE "Bewerbungsstatus" AS ENUM ('AKZEPTIERT', 'ABGELEHNT', 'AUSSTEHEND');

-- CreateTable
CREATE TABLE "Benutzer" (
    "benutzerId" SERIAL NOT NULL,
    "erstelltAm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aktualisiertAm" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "Role" "Role" NOT NULL,

    CONSTRAINT "Benutzer_pkey" PRIMARY KEY ("benutzerId")
);

-- CreateTable
CREATE TABLE "Betrieb" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "beschreibung" TEXT NOT NULL,
    "stadt" TEXT NOT NULL,
    "benutzerId" INTEGER NOT NULL,

    CONSTRAINT "Betrieb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Praktikumsstelle" (
    "id" SERIAL NOT NULL,
    "erstelltAm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aktualisiertAm" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "beschreibung" TEXT,
    "betriebId" INTEGER,

    CONSTRAINT "Praktikumsstelle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lernender" (
    "id" SERIAL NOT NULL,
    "vorname" TEXT NOT NULL,
    "nachname" TEXT NOT NULL,
    "benutzerId" INTEGER NOT NULL,

    CONSTRAINT "Lernender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bewerbung" (
    "id" SERIAL NOT NULL,
    "erstelltAm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aktualisiertAm" TIMESTAMP(3) NOT NULL,
    "nachricht" TEXT NOT NULL,
    "status" "Bewerbungsstatus" NOT NULL DEFAULT 'AUSSTEHEND',
    "lernenderId" INTEGER,

    CONSTRAINT "Bewerbung_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Benutzer_email_key" ON "Benutzer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Betrieb_benutzerId_key" ON "Betrieb"("benutzerId");

-- CreateIndex
CREATE UNIQUE INDEX "Lernender_benutzerId_key" ON "Lernender"("benutzerId");

-- AddForeignKey
ALTER TABLE "Betrieb" ADD CONSTRAINT "Betrieb_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer"("benutzerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Praktikumsstelle" ADD CONSTRAINT "Praktikumsstelle_betriebId_fkey" FOREIGN KEY ("betriebId") REFERENCES "Betrieb"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lernender" ADD CONSTRAINT "Lernender_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer"("benutzerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bewerbung" ADD CONSTRAINT "Bewerbung_lernenderId_fkey" FOREIGN KEY ("lernenderId") REFERENCES "Lernender"("id") ON DELETE SET NULL ON UPDATE CASCADE;
