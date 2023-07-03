import { Router } from "express";
import MedicoController from "../controllers/medicoController";

const router = Router();
const medicoController = new MedicoController();

// Rutas para los médicos
router.get('/medicos', medicoController.getAllMedicos);
router.post('/medicos', medicoController.createMedico);
router.get('/medicos/:tarjetaProfesional', medicoController.getMedicoByTarjetaProfesional);
router.put('/medicos/:tarjetaProfesional', medicoController.updateMedico);
router.delete('/medicos/:tarjetaProfesional', medicoController.deleteMedico);

export default router;
