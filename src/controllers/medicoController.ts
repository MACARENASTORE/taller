import { Router, Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class MedicoController {
  // Controlador para obtener todos los médicos
  async getAllMedicos(req: Request, res: Response) {
    try {
      const medicos = await prisma.medico.findMany();
      res.json(medicos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los médicos' });
    }
  }

  // Controlador para obtener un médico por su tarjeta profesional
  async getMedicoByTarjetaProfesional(req: Request, res: Response) {
    const { tarjetaProfesional } = req.params;
    
    try {
      const medico = await prisma.medico.findUnique({
        where: {
          tarjetaProfesional: parseInt(tarjetaProfesional),
        },
      });

      if (!medico) {
        res.status(404).json({ error: 'Médico no encontrado' });
      } else {
        res.json(medico);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el médico' });
    }
  }

  // Controlador para crear un nuevo médico
  async createMedico(req: Request, res: Response) {
    const { tarjetaProfesional, nombre, apellido, consultorio, correo, idEspecialidad } = req.body;

    try {
      const medico = await prisma.medico.create({
        data: {
          tarjetaProfesional: parseInt(tarjetaProfesional),
          nombre,
          apellido,
          consultorio,
          correo,
          idEspecialidad: parseInt(idEspecialidad),
        },
      });

      res.json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el médico' });
    }
  }

  // Controlador para actualizar un médico
  async updateMedico(req: Request, res: Response) {
    const { tarjetaProfesional } = req.params;
    const { nombre, apellido, consultorio, correo, idEspecialidad } = req.body;

    try {
      const medico = await prisma.medico.update({
        where: {
          tarjetaProfesional: parseInt(tarjetaProfesional),
        },
        data: {
          nombre: nombre ? nombre : undefined,
          apellido: apellido ? apellido : undefined,
          consultorio: consultorio ? consultorio : undefined,
          correo: correo ? correo : undefined,
          idEspecialidad: idEspecialidad ? parseInt(idEspecialidad) : undefined,
        },
      });

      res.json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el médico' });
    }
  }

  // Controlador para eliminar un médico
  async deleteMedico(req: Request, res: Response) {
    const { tarjetaProfesional } = req.params;

    try {
      await prisma.medico.delete({
        where: {
          tarjetaProfesional: parseInt(tarjetaProfesional),
        },
      });

      res.json({ message: 'Médico eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el médico' });
    }
  }
}

export default MedicoController;
