import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

class MedicoController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async obtenerMedicos(req: Request, res: Response) {
    try {
      const medicos = await this.prisma.medico.findMany();
      res.json(medicos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los médicos' });
    }
  }

  async crearMedico(req: Request, res: Response) {
    try {
      const { nombre, apellido, consultorio, correo } = req.body;
      const tarjetaProfesional = parseInt(req.body.tarjetaProfesional);

      const medico = await this.prisma.medico.create({
        data: {
          tarjetaProfesional,
          nombre,
          apellido,
          consultorio,
          correo,
        },
      });
      res.json(medico);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async actualizarMedico(req: Request, res: Response) {
    try {
      const tarjetaProfesional = parseInt(req.params.tarjetaProfesional);
      const { nombre, apellido, consultorio, correo } = req.body;

      const medico = await this.prisma.medico.update({
        where: { tarjetaProfesional },
        data: {
          nombre,
          apellido,
          consultorio,
          correo,
        },
      });
      res.json(medico);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminarMedico(req: Request, res: Response) {
    try {
      const tarjetaProfesional = parseInt(req.params.tarjetaProfesional);

      await this.prisma.medico.delete({
        where: { tarjetaProfesional },
      });
      res.sendStatus(204);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminarMedico1(req: Request, res: Response) {
    try {
      const { tarjetaProfesional } = req.params;
  
      const medico = await this.prisma.medico.delete({
        where: { tarjetaProfesional: Number(tarjetaProfesional) },
      });
  
      res.json(medico);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

}

export default MedicoController;
