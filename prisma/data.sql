-- Insertar registros de ejemplo en la tabla "Paciente"
INSERT INTO Paciente (cedula, nombre, apellido, fechaNacimiento, telefono)
VALUES
  (1, 'Juan', 'Pérez', '1990-01-15', '1234567890'),
  (2, 'María', 'López', '1985-05-20', '9876543210'),
  (3, 'Pedro', 'González', '1992-09-10', '4567890123'),
  (4, 'Ana', 'Martínez', '1988-03-25', '7890123456'),
  (5, 'Carlos', 'Hernández', '1995-07-01', '2345678901'),
  (6, 'Laura', 'Ramírez', '1993-11-08', '8901234567'),
  (7, 'Luis', 'Gómez', '1997-02-14', '3456789012'),
  (8, 'Marcela', 'Torres', '1991-06-05', '9012345678'),
  (9, 'Andrés', 'Sánchez', '1994-10-18', '6789012345'),
  (10, 'Diana', 'García', '1989-12-30', '0123456789');

-- Insertar registros de ejemplo en la tabla "Medico"
INSERT INTO Medico (tarjetaProfesional, nombre, apellido, consultorio, correo, idEspecialidad)
VALUES
  (1, 'Javier', 'López', 'Consultorio A', 'javier@example.com', 1),
  (2, 'María', 'González', 'Consultorio B', 'maria@example.com', 2),
  (3, 'Pedro', 'Ramírez', 'Consultorio C', 'pedro@example.com', 1),
  (4, 'Ana', 'Martínez', 'Consultorio D', 'ana@example.com', 3),
  (5, 'Carlos', 'Gómez', 'Consultorio E', 'carlos@example.com', 2),
  (6, 'Laura', 'Hernández', 'Consultorio F', 'laura@example.com', 1),
  (7, 'Luis', 'Pérez', 'Consultorio G', 'luis@example.com', 3),
  (8, 'Marcela', 'Torres', 'Consultorio H', 'marcela@example.com', 2),
  (9, 'Andrés', 'Sánchez', 'Consultorio I', 'andres@example.com', 3),
  (10, 'Diana', 'García', 'Consultorio J', 'diana@example.com', 1);

-- Insertar registros de ejemplo en la tabla "Cita"
INSERT INTO Cita (idCita, fecha, pacienteCedula, medicoTarjetaProfesional)
VALUES
  (1, '2023-06-01 09:00:00', 1, 1),
  (2, '2023-06-02 10:30:00', 2, 3),
  (3, '2023-06-03 14:15:00', 3, 2),
  (4, '2023-06-04 11:45:00', 4, 4),
  (5, '2023-06-05 16:30:00', 5, 1),
  (6, '2023-06-06 08:45:00', 6, 3),
  (7, '2023-06-07 13:00:00', 7, 2),
  (8, '2023-06-08 15:30:00', 8, 4),
  (9, '2023-06-09 10:15:00', 9, 1),
  (10, '2023-06-10 12:45:00', 10, 3);

-- Insertar registros de ejemplo en la tabla "Especialidad"
INSERT INTO Especialidad (idEspecialidad, nombre)
VALUES

  (1, 'Cardiología'),
  (2, 'Medicina interna'),
  (3, 'Dermatología'),
  (4, 'Rehabilitación física'),
  (5, 'Psicología'),
  (6, 'Odontología');
