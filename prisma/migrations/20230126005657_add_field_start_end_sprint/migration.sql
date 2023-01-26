/*
  Warnings:

  - You are about to drop the column `sprint` on the `Burndown` table. All the data in the column will be lost.
  - Added the required column `sprint_end` to the `Burndown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sprint_start` to the `Burndown` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Burndown" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "team" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "sprint_start" DATETIME NOT NULL,
    "sprint_end" DATETIME NOT NULL,
    "point" INTEGER NOT NULL
);
INSERT INTO "new_Burndown" ("date", "id", "point", "team") SELECT "date", "id", "point", "team" FROM "Burndown";
DROP TABLE "Burndown";
ALTER TABLE "new_Burndown" RENAME TO "Burndown";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
