import { Router, Request, Response } from "express";
import PacienteController from "../controllers/pacienteController";

class PacienteRouter {
  router: Router;
  pacienteController: PacienteController;

  constructor() {
    this.router = Router();
    this.pacienteController = new PacienteController();
    this.routes();
  }

  private routes(): void {
    this.router.get(
      "/paciente",
      this.pacienteController.obtenerPacientes.bind(this.pacienteController)
    );

    this.router.post(
      "/crear_paciente",
      this.pacienteController.crearPaciente.bind(this.pacienteController)
    );

    this.router.put(
      "/actualizar_paciente/cedula",
      this.pacienteController.actualizarPaciente.bind(this.pacienteController)
    );

    this.router.delete(
      "/eliminar_paciente/cedula",
      this.pacienteController.eliminarPaciente.bind(this.pacienteController)
    );
  }
}

export default new PacienteRouter().router;
