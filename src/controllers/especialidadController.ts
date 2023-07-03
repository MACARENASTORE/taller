import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

class EspecialidadController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async obtenerEspecialidades(req: Request, res: Response) {
        try {
            const especialidades = await this.prisma.especialidad.findMany();
            res.json(especialidades);
        } catch (error: any) {
            res.status(500).json({ error: 'No se pudieron obtener las especialidades.' });
        }
    }

    async crearEspecialidad(req: Request, res: Response) {
        try {
            const { idEspecialidad, nombre } = req.body;
            const idEspecialidadNumber = parseInt(idEspecialidad);

            const especialidad = await this.prisma.especialidad.create({
                data: {
                    idEspecialidad: idEspecialidadNumber,
                    nombre
                }
            });

            res.json(especialidad);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async actualizarEspecialidad(req: Request, res: Response) {
        try {
            const { idEspecialidad } = req.params;
            const { nombre } = req.body;
            const idEspecialidadNumber = parseInt(idEspecialidad);

            const especialidadActualizada = await this.prisma.especialidad.update({
                where: { idEspecialidad: idEspecialidadNumber },
                data: { nombre }
            });

            res.json(especialidadActualizada);
        } catch (error: any) {
            res.status(500).json({ error: 'No se pudo actualizar la especialidad.' });
        }
    }

    async eliminarEspecialidad(req: Request, res: Response) {
        try {
            const { idEspecialidad } = req.params;
            const idEspecialidadNumber = parseInt(idEspecialidad);

            await this.prisma.especialidad.delete({
                where: { idEspecialidad: idEspecialidadNumber }
            });

            res.json({ message: 'Especialidad eliminada exitosamente.' });
        } catch (error: any) {
            res.status(500).json({ error: 'No se pudo eliminar la especialidad.' });
        }
    }
}

export default EspecialidadController;
