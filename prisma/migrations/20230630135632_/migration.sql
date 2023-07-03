/*
  Warnings:

  - Made the column `idEspecialidad` on table `Medico` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medico" (
    "tarjetaProfesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "idEspecialidad" INTEGER NOT NULL,
    CONSTRAINT "Medico_idEspecialidad_fkey" FOREIGN KEY ("idEspecialidad") REFERENCES "Especialidad" ("idEspecialidad") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("apellido", "consultorio", "correo", "idEspecialidad", "nombre", "tarjetaProfesional") SELECT "apellido", "consultorio", "correo", "idEspecialidad", "nombre", "tarjetaProfesional" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
