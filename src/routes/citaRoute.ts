import express from 'express';
import CitaController from '../controllers/citaController';

const router = express.Router();
const citaController = new CitaController();

router.get('/citas', citaController.obtenerCitas);
router.post('/citas', citaController.crearCita);
router.put('/citas/:idCita', citaController.actualizarCita);
router.delete('/citas/:idCita', citaController.eliminarCita);

export default router;
