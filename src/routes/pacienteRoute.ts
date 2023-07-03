import express from 'express';
import PacienteController from '../controllers/pacienteController';

const router = express.Router();
const pacienteController = new PacienteController();

// Ruta para crear un paciente
router.post('/pacientes', pacienteController.crearPaciente);

// Ruta para obtener todos los pacientes
router.get('/pacientes', pacienteController.obtenerPacientes);

// Ruta para obtener un paciente por su ID
router.get('/pacientes/:id', pacienteController.obtenerPacientePorId);

// Ruta para actualizar un paciente
router.put('/pacientes/:id', pacienteController.actualizarPaciente);

// Ruta para eliminar un paciente
router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

export default router;
