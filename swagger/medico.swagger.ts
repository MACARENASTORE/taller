export default {
     /**
      * @swagger
      *
      * /crear_medicos:
      *   post:
      *     summary: Crear un Médico
      *     responses:
      *       200:
      *         description: Médico creado exitosamente
      *
      * @swagger
      *
      * /medicos:
      *   get:
      *     summary: Obtener todos los médicos
      *     responses:
      *       200:
      *         description: Lista de Médicos
      *
      * @swagger
      *
      * /actualizar_medico/{tarjetaProfesional}:
      *   put:
      *     summary: Actualizar un médico por tarjeta profesional
      *     parameters:
      *       - in: path
      *         name: tarjetaProfesional
      *         required: true
      *         schema:
      *           type: string
      *     responses:
      *       200:
      *         description: Médico actualizado exitosamente
      *
      * @swagger
      *
      * /eliminar_medico/{tarjetaProfesional}:
      *   delete:
      *     summary: Eliminar un médico por tarjeta profesional
      *     parameters:
      *       - in: path
      *         name: tarjetaProfesional
      *         required: true
      *         schema:
      *           type: string
      *     responses:
      *       200:
      *         description: Médico eliminado exitosamente
      *
      */
   };
   