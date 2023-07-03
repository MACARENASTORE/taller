import { Request, Response } from 'express';
import moment from 'moment';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PacienteController {
   // Controlador para obtener todos los pacientes
   async obtenerPacientes(req: Request, res: Response) {
		try {
			const paciente = await prisma.paciente.findMany();
			res.json(paciente);
		} catch (error) {
			res.status(500).json(error);
		}
	}
  // Controlador para crear un paciente
  async crearPaciente(req: Request, res: Response) {
    const { cedula, nombre, apellido, fechaNacimiento, telefono } = req.body;
  
    try {
      // Verificar si la fecha de nacimiento es válida
      const isValidDate = moment(fechaNacimiento, 'YYYY-MM-DD', true).isValid();
      if (!isValidDate) {
        throw new Error('Fecha de nacimiento no válida. Formato esperado: YYYY-MM-DD');
      }
  
      const paciente = await prisma.paciente.create({
        data: {
          cedula: parseInt(cedula),
          nombre,
          apellido,
          fechaNacimiento: new Date(fechaNacimiento),
          telefono,
        },
      });
  
      res.json(paciente);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
  
 
  // Controlador para obtener un paciente por su ID
  async obtenerPacientePorId(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const paciente = await prisma.paciente.findUnique({
        where: {
          cedula: parseInt(id),
        },
      });

      if (!paciente) {
        res.status(404).json({ error: 'Paciente no encontrado' });
      } else {
        res.json(paciente);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el paciente' });
    }
  }

  // Controlador para actualizar un paciente
  async actualizarPaciente(req: Request, res: Response) {
    const { id } = req.params;
    const { nombre, apellido, fechaNacimiento, telefono } = req.body;

    try {
      // Verificar si la fecha de nacimiento es válida
      if (fechaNacimiento && !moment(fechaNacimiento, 'YYYY-MM-DD', true).isValid()) {
        throw new Error('Fecha de nacimiento no válida');
      }

      const paciente = await prisma.paciente.update({
        where: {
          cedula: parseInt(id),
        },
        data: {
          nombre: nombre ? nombre : undefined,
          apellido: apellido ? apellido : undefined,
          fechaNacimiento: fechaNacimiento ? new Date(fechaNacimiento) : undefined,
          telefono: telefono ? telefono : undefined,
        },
      });

      res.json(paciente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el paciente' });
    }
  }

  // Controlador para eliminar un paciente
  async eliminarPaciente(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.paciente.delete({
        where: {
          cedula: parseInt(id),
        },
      });

      res.json({ message: 'Paciente eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el paciente' });
    }
  }
}

export default PacienteController;
