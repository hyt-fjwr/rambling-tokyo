/*
  Warnings:

  - A unique constraint covering the columns `[Went_cnt]` on the table `STATIONS` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "STATIONS_Went_cnt_key" ON "STATIONS"("Went_cnt");
