import { Router } from 'express';
import EspecialidadController from '../controllers/especialidadController';

const router = Router();
const especialidadController = new EspecialidadController();

// Ruta para obtener todas las especialidades
router.get('/especialidades', especialidadController.obtenerEspecialidades);

// Ruta para crear una nueva especialidad
router.post('/especialidades', especialidadController.crearEspecialidad);

// Ruta para actualizar una especialidad existente
router.put('/especialidades/:idEspecialidad', especialidadController.actualizarEspecialidad);

// Ruta para eliminar una especialidad
router.delete('/especialidades/:idEspecialidad', especialidadController.eliminarEspecialidad);

export default router;