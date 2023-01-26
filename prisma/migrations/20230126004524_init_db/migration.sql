-- CreateTable
CREATE TABLE "Burndown" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "team" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "sprint" TEXT NOT NULL,
    "point" INTEGER NOT NULL
);
