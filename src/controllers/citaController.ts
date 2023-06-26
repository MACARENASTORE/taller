import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

class CitaController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async obtenerCitas(req: Request, res: Response) {
    try {
      const citas = await this.prisma.cita.findMany();
      res.json(citas);
    } catch (error: any) {
      res.status(500).json({ error: 'Error al obtener las citas' });
    }
  }

  async crearCita(req: Request, res: Response) {
    try {
      const { idCita, fechaCita, pacienteCedula, medicoTarjetaProfesional } = req.body;

      const fecha = new Date(fechaCita);
      const cita = await this.prisma.cita.create({
        data: {
          idCita,
          fecha,
          pacienteCedula,
          medicoTarjetaProfesional,
        },
      });
      res.json(cita);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async actualizarCita(req: Request, res: Response) {
    try {
      const idCita = parseInt(req.params.idCita);
      const { fechaCita, pacienteCedula, medicoTarjetaProfesional } = req.body;

      const fecha = new Date(fechaCita);
      const cita = await this.prisma.cita.update({
        where: { idCita },
        data: {
          fecha,
          pacienteCedula,
          medicoTarjetaProfesional,
        },
      });
      res.json(cita);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminarCita(req: Request, res: Response) {
    try {
      const idCita = parseInt(req.params.idCita);

      await this.prisma.cita.delete({
        where: { idCita },
      });
      res.sendStatus(204);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default CitaController;
