import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CitaController {
  obtenerCitas = async (req: Request, res: Response) => {
    try {
      const citas = await prisma.cita.findMany();
      res.json(citas);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener la lista de citas.' });
    }
  }

  crearCita = async (req: Request, res: Response) => {
    try {
      const {
        idCita,
        fechaCita,
        pacienteCedula,
        medicoTarjetaProfesional
      } = req.body;

      const fecha = new Date(fechaCita);
      const cita = await prisma.cita.create({
        data: {
          idCita: Number(idCita),
          fecha,
          pacienteCedula: Number(pacienteCedula),
          medicoTarjetaProfesional: Number(medicoTarjetaProfesional)
        }
      });
      res.json(cita);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  actualizarCita = async (req: Request, res: Response) => {
    try {
      const { idCita } = req.params;
      const { fecha, pacienteCedula, medicoTarjetaProfesional } = req.body;
      const citaActualizada = await prisma.cita.update({
        where: { idCita: Number(idCita) },
        data: {
          fecha,
          pacienteCedula: Number(pacienteCedula),
          medicoTarjetaProfesional: Number(medicoTarjetaProfesional),
        },
      });
      res.json(citaActualizada);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar la cita.' });
    }
  }

  eliminarCita = async (req: Request, res: Response) => {
    try {
      const { idCita } = req.params;
      await prisma.cita.delete({
        where: { idCita: Number(idCita) },
      });
      res.json({ message: 'Cita eliminada exitosamente.' });
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar la cita.' });
    }
  }
}

export default CitaController;
