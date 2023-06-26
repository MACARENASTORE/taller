import { Router } from "express";
import MedicoController from "../controllers/medicoController";

class MedicoRouter {
  router: Router;
  medicoController: MedicoController;

  constructor() {
    this.router = Router();
    this.medicoController = new MedicoController();
    this.routes();
  }

  private routes(): void {
    this.router.get(
      "/medicos",
      this.medicoController.obtenerMedicos.bind(this.medicoController)
    );
    this.router.post(
      "/:crear_medicos",
      this.medicoController.crearMedico.bind(this.medicoController)
    );
    this.router.put(
      "/actualizar_medico/:tarjetaProfesional",
      this.medicoController.actualizarMedico.bind(this.medicoController)
    );
    this.router.delete(
      "/eliminar_medico/:tarjetaProfesional",
      this.medicoController.eliminarMedico.bind(this.medicoController)
    );
  }
}

export default new MedicoRouter().router;
